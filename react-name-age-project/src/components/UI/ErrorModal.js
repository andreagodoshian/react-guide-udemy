import React from "react";
import classes from "./ErrorModal.module.css"

import Card from "./Card";
import Button from "./Button";

/*
please notice: location of onClick={}
<div className={classes.backdrop} onClick={props.onConfirm}/>

also notice: we already prepared Button.js
        <button 
            className={classes.button}
            type={props.type || "button"}
            onClick={props.onClick}>
*/

function ErrorModal(props) {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>

                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>

                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Heard, chef!</Button>
                </footer>
            </Card>
        </div>
    )

}

export default ErrorModal;