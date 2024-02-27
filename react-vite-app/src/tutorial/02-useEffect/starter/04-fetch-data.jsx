import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  //useEffect FECZ
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  w;
  return (
    <ul className='users'>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <h3>{login}</h3>
            <img src={avatar_url} alt={login} />
            <a href={html_url}>profile</a>
          </li>
        );
      })}
    </ul>
  );
};
export default FetchData;
