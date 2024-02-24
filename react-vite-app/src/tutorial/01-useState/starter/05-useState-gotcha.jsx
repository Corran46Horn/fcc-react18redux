import { useState } from 'react';

const UseStateGotcha = () => {
  let [num, setNum] = useState(0);
  //update state zgodnie z logiem
  /*const updateButton = () => {
    setNum((currentState) => {
      const newState = currentState + 1;
      return newState;
      console.log(newState);
    });
    console.log(num);
  };*/
  //wszystkie naciśnięcia policzone
  const updateButton = () => {
    // setTimeout(() => {
    // console.log('clicked the button');
    //   setValue(value + 1);
    // }, 3000);
    setTimeout(() => {
      console.log('clicked the button');
      setNum((currentState) => {
        return currentState + 1;
      });
    }, 2000);
  };
  return (
    <div>
      <h2>{num}</h2>
      <button type='button' className='btn' onClick={updateButton}>
        Update
      </button>
    </div>
  );
};

export default UseStateGotcha;
