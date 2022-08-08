import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

/*
I forgot useRef() already 😭😭😭
"actual DOM node - used sparingly - usually just to read"
*/

// NOTICE THAT THE WHOLE THING IS WRAPPED IN FORWARDREF!!
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // 
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;