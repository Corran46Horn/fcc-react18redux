import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [truthy, setTruthy] = useState(1);
  const [falsy, setFalsy] = useState(0);

  return (
    <div>
      <h2>falsy or {'truthy' || falsy}</h2>
      <h4>Falsy AND {falsy && 'hello world'}</h4>
      <h4>Truthy OR {falsy || 'hello world'}</h4>
      <h4>Truthy AND {truthy && 'hello world'}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
