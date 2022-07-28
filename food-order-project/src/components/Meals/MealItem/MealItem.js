import React from "react";
import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

/*
Notes:
1.) props.price.toFixed(2) = two decimal places
*/
function MealItem(props) {

    const price = `$${props.price.toFixed(2)}`;
    
    return(
        <React.Fragment>
            <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                
                <div>
                    <MealItemForm/>
                </div>
            </li>
        </React.Fragment>
    )
}

export default MealItem;