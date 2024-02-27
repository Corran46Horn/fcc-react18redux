import { useState } from 'react';

const CleanupFunction = () => {
  const [value, setValue] = useState(0);
  const toggleMe = () => {};
  return (
    <div>
      <h2>tak to sie przedstawia</h2>
      <button className='btn' onClick={toggleMe}>
        Kliknij mnie
      </button>
    </div>
  );
};

export default CleanupFunction;
