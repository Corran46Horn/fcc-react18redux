import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  //useEffect FECZ
  return <h2>{users.name}</h2>;
};
export default FetchData;
