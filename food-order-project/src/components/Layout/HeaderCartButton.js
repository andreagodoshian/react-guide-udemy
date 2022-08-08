import {useContext, useEffect, useState} from "react";
import classes from "./HeaderCartButton.module.css";

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

/*
Notes:
1.) <button onClick={}/> is built-in
2.) nocontext for onClick? two-level prop passing?
...I guess it's not too bad here.
*/
function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext);
  const {items} = cartCtx; // object destructuring

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  ////////////// Button Stuff //////////////
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  // useEffect(() => {}, [dependencies])
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false) // resetting "btnClasses"
    }, 300) // ms
    return () => {
      clearTimeout(timer); // clears the timer
    }
  }, [items]); // the destructured object
  //////////////////////////////////////////

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;