import React from "react";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

/*
Notes:
<Cart onClose={hideCartHandler} />
*/

function Cart(props){

    const cartItems = 
        <ul className={classes["cart-items"]}>{
            [{id: "c1", name: "chimken", amount: 2, price: 12.99}
            ].map(x => <li>{x.name}</li>)
        }</ul>;

    return(
        <React.Fragment>
            <Modal>
                {cartItems}

                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>

                <div className={classes.actions}>
                    <button onClick={props.onClose} className={classes["button--alt"]}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default Cart;