import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

/* 
Note from Max:
We should of course check email and password ... it's just a dummy/demo

Note from me: 
If not connected to db, would be localStorage (see below) or cookies.
localStorage is a global object, available in the browser.
*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // desired_function, [dependencies]
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    
    if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
  }, []); // if no dependencies, they also aren't changing
  // YOU DON'T WANT TO CREATE AN INFINITE LOOP!!!!!!!

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1") // doesn't have to be "1"
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;