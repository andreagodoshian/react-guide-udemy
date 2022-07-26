import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  ///////////////////////////////////////////////////
  // dummy hook
  // "useEffect is one of the most important React hooks,
  // so you need to understand it"
  useEffect(() => {
    console.log("EFFECT RUNNING!")
    return () => {
      console.log("DUMMY CLEANUP")
    }
  }, [enteredPassword]) // test with and without empty array!!!!
  ///////////////////////////////////////////////////

  // side-effects are often http requests, HOWEVER...
  // "this is a side-effect of the user entering data"
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("VALIDATION"); // good visual reference
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500); // 500 ms
    return () => {
      console.log("CLEANUP"); // 21 "CLEANUP" vs. 1 "VALIDATION"
      clearTimeout(identifier); // NEED TO CLEAR THE TIMER!!!
    };
  }, [enteredEmail, enteredPassword]);
  // ^^this way, it's not "listening to every key-stroke"
  // and sending five million http requests lol

  const emailChangeHandler = (event) => setEnteredEmail(event.target.value);
  const passwordChangeHandler = (event) => setEnteredPassword(event.target.value);

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;