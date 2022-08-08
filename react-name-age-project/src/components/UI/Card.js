import React from "react";
import classes from "./Card.module.css"

/*
we are trying to render children of AddUser.js, yes??
aka everything inside of <Card> ... </Card>
WHICH INCLUDES THE ADDUSER.MODULE.CSS FILE!!

{props.children} 
and 
<div className={`${classes.card} ${props.className}`}>
*/

function Card(props) {

    return(
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )

}

export default Card;