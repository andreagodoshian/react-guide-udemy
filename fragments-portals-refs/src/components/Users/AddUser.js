import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import Wrapper from "../Helpers/Wrapper";

// Controlled and Uncontrolled Components!!
// Uncontrolled = useRef() variable
// Controlled = useState() variable

/*
Notes from Max:
Manipulating the DOM via useRef() should be done sparingly.
This is just a tutorial, because this is one situation 
where useRef() is arguably okay, since we're technically
not manipulating the DOM (ex. adding an element or changing
a class)... we're just manipulating the input

"Just reading values" is another situation where you might
want to utilize useRef() since it's less code
*/

const AddUser = (props) => {
  const nameInputRef = useRef(); // "use" denotes a hook
  const ageInputRef = useRef(); // "use" denotes a hook

//   <input id="username" type="text" value={enteredUsername}
//   ref={nameInputRef}/>

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    
    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid name",
        message: "Please enter a valid name (non-null)." })
      return };
    if (+enteredUserAge < 1 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0 && non-null)." });
      return };

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser