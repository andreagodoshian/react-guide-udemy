import React from "react";
import classes from "./Input.module.css"

/*
Notes:
1.) {...props.input} = spread operator shortcut
*/
const Input = React.forwardRef((props, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    );
  });
  
  export default Input;