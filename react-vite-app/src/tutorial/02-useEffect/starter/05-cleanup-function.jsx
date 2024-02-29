import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <h2>tak to sie przedstawia</h2>
      <button className='btn' onClick={() => setValue(!value)}>
        kliknij mnie
      </button>
      <br />
      {value && <ToggleMe />}
    </div>
  );
};
const ToggleMe = () => {
  useEffect(() => {
    console.log('hmm, this is interesting');
    //cleanup function
    const intId = setInterval(() => {
      console.log('hello');
    }, 1000);
    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h2 className='btn'>Ania ania ania</h2>;
};

export default CleanupFunction;
