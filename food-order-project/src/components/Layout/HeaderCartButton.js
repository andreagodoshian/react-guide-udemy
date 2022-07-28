import React from "react";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

/*
Notes:
1.) <button onClick={}/> is built-in
2.) why no context? two-level prop passing?
...I guess it's not too bad here.
*/
function HeaderCartButton(props) {
    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    );
  };

export default HeaderCartButton;