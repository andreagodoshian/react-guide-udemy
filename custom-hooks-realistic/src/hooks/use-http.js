import { useState, useCallback } from 'react';

/*
1.) Reusuable goal: able to send ANY kind of http request
2.) Since the "reusuable goal" contains/depends on state,
we need to make a custom hook (remember: rules of hooks)
3.) Custom Hooks **MUST** start with "use..."
4.) fetch() is GET by default; so if you don't want to bloat things:
method: requestConfig.method ? requestConfig.method : 'GET'
*/

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // requestConfig: url/endpoint (because this is reusuable)
  // applyData: function for transforming data
  // useCallback: (fetchTasks -> sendRequest sets states -> re-renders App.js)
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) throw new Error("Request failed 😭😭😭");

      const data = await response.json(); // transformation step
      applyData(data); // can pass different functions, so reusable
    } catch (err) {
      setError(err.message || "Something went wrong 😭😭😭");
    } finally {
    setIsLoading(false);
    }
  }, []); // empty: requestConfig & applyData are parameters, NOT dependencies

  return { // what is your custom hook returning?
    isLoading,
    error,
    sendRequest,
  };

};

export default useHttp;