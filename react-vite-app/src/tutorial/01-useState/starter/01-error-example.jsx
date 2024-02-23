import { useState } from 'react';
const ErrorExample = () => {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2 style={{ textTransform: 'lowercase' }}>kliknąłeś {count} razy</h2>
      <button type='button' className='btn' onClick={increase}>
        +
      </button>
    </div>
  );
};

export default ErrorExample;
