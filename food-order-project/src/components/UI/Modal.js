import React from "react";
import classes from "./Modal.module.css";

import ReactDOM from "react-dom";

/*
Notes:
1.) Backdrop & ModalOverlay = React Portals
2.) <noscript>You need to enable JavaScript ...</noscript>
    <div id="overlays"></div>
    <div id="root"></div>
3.) ReactDOM from "react-dom" = React Portals
4.) {ReactDOM.createPortal(<Backdrop/>, portalElement)}
*/

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
}

function ModalOverlay(props) {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

////////////////////////////////////////////

const portalElement = document.getElementById("overlays");

function Modal(props){

    return (
        <React.Fragment>
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )}
        </React.Fragment>
      );
    };

export default Modal;