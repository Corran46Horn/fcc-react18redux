import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // example fetching data
      console.log('done fetching date');
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Uploaded</h2>;
};
export default MultipleReturnsBasics;
