import React, {useContext} from "react";
import classes from "./Cart.module.css";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

/*
This is inside of cart-context.js

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
  });
*/

function Cart(props){
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  

    // wire-up the button
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
 
    // wire-up the button
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, amount: 1})
    };
  
    const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

    return(
        <React.Fragment>
            <Modal>
                {cartItems}

                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>

                <div className={classes.actions}>
                    <button onClick={props.onClose} className={classes["button--alt"]}>Close</button>
                    {hasItems && <button className={classes.button}>Order</button>}
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default Cart;