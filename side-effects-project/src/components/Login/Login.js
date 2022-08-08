import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import classes from './Login.module.css';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from "../../store/auth-context";

// state = state snapshot
// action = the action that was dispatched
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

/////////////////////////////////////////////////////
// ACTUAL COMPONENT STARTS HERE!!! LOL!!!          //
/////////////////////////////////////////////////////

function Login(props) {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  ///////////////////////////////////////////////////
  // dummy hook - useEffect() is an important React hook,
  // "so you need to understand it"
  useEffect(() => {
    console.log("DUMMY EFFECT");
    return () => {
      console.log("DUMMY CLEANUP");
    };
  }, []); // test WITH and WITHOUT empty array!!!
  ///////////////////////////////////////////////////

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  // ^^1/2: THIS REDUCES HOW OFTEN "CLEANUP" RUNS!!
  // "object destructuring" (pulling them out of the state)

  // useEffect() - although side-effects are often http requests...
  // "this is a side-effect of the user entering data"
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('VALIDATE'); // good visual reference
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500); // 500 ms

    return () => {
      console.log('CLEANUP'); // 21 "CLEANUP" vs. 1 "VALIDATION"
      clearTimeout(identifier); // NEED TO CLEAR THE TIMER!!!
    };
  // }, [emailState, passwordState]);
  }, [emailIsValid, passwordIsValid]);
  // ^^2/2: THIS REDUCES HOW OFTEN "CLEANUP" RUNS!!

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;