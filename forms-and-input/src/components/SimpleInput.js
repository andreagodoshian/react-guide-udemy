import useInput from '../hooks/use-input';

/*
1.) all "state" has been moved to the custom hook
^^because it's a taco within a taco
2.) onBlur={} is built-in event, just like onChange={}
3.) disabled={!formIsValid}
4.) What does the custom hook return?
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
*/
const SimpleInput = (props) => {
  // de-structuring
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== ''); // import useInput from '../hooks/use-input';

  // de-structuring
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@')); // import useInput from '../hooks/use-input';

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!enteredEmailIsValid) return;
    if (!enteredNameIsValid) return;
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
    // ^^DON'T MANIPULATE THE DOM!! (nameInputRef.current.value = "")
  };

  const nameInputClasses = nameInputHasError
  ? 'form-control invalid'
  : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className='error-text'>Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>Your E-Mail</label>
          <input
            type='email'
            id='email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className='error-text'>Please enter a valid email.</p>
          )}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;