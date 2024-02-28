import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const logIn = () => {
    setUser({ name: 'Anna' });
  };
  const logOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
          <button className='btn' onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className='btn' onClick={logIn}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
