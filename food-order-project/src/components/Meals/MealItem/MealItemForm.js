import React from "react";
import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

function MealItemForm(props) {

    return(
        <React.Fragment>
            <form className={classes.form}>
                <Input 
                    label="Amount" 
                    input={{
                        id: "amount",
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1"
                    }}
                />
                <button>+ Add</button>
            </form>
        </React.Fragment>
    )
}

export default MealItemForm;