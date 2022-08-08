import React from "react";
import classes from "./Card.module.css";

/*
Notes:

1.) props (of course) because need props.children
*/

function Card(props) {

    return(
        <React.Fragment>
            <div className={classes.card}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Card;