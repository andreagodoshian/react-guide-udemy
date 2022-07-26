import React, { useState, useEffect } from "react";

/*
General note:
Context shouldn't replace ALL chains, but...
It helps us, so that we aren't passing props through ten different components... 
also: notice that the file is spelled auth-context.js ??
that's because it's not technically a component

WARNING:
React Context is NOT optimized for high frequency changes!
(we'll explore a better tool for that later)
*/

////////////////////////////////////////

// however, "const" is spelled "AuthContext" bc it'll contain components
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
  });
  
  export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  
      if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true);
      }
    }, []);
  
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };
  
    const loginHandler = () => {
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;