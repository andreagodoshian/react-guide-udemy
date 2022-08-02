import { useState, useEffect } from 'react';

/*
Custom hooks **MUST** start with "use..."
^^this is a React-Rule, not just a socially-accepted rule
*/
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (forwards) {
          setCounter((prevCounter) => prevCounter + 1);
        } else {
          setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);
  
    return counter;
  };
  
  export default useCounter;