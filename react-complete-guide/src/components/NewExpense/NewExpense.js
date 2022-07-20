import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

// REMEMBER: PROPS IS THE PASSING-FUNCTION WE CREATED!!
function NewExpense(props) {

    // can't pass from child to great-grandparent...
    // therefore, we need to follow the trail
    const saveExpenseHandler = (event) => {

        const expenseData = {
            ...event,
            id: Math.random().toString()
        };

        // ***FUNNELING INSIDE!! TACO IN A TACO!!***
        props.onAddExpense(expenseData);

    }

    return (
        <div className="new-expense">
            {/* passing the function to ExpenseForm */}
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    )
    
}

export default NewExpense;