import { useState } from 'react';

const ToggleChallenge = () => {
  const [name, setName] = useState(1);

  const renderValue = () => {
    if (name) {
      setName('');
    } else {
      setName(1);
    }
  };
  return (
    <div>
      <button className='btn' onClick={renderValue}>
        Anna
      </button>
      {name && <ComponentStuff />}
    </div>
  );
};

const ComponentStuff = () => {
  return <h3 className='alert alert-danger'>kocham barzo</h3>;
};
export default ToggleChallenge;
