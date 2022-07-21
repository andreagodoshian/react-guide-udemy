import React, {useState} from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

// REMEMBER: PROPS IS THE PASSING-FUNCTION WE CREATED!!
function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    const onEditingHandler = () => {
        setIsEditing(true)};

    const offEditingHandler = () => {
        setIsEditing(false)};

    const saveExpenseHandler = (event) => {
        const expenseData = {
            ...event,
            id: Math.random().toString()};
        // ***FUNNELING INSIDE!! TACO IN A TACO!!***
        props.onAddExpense(expenseData);
        setIsEditing(false)};

    return (
        <div className="new-expense">

            {!isEditing && <button onClick={onEditingHandler}>Add New Expense</button>}
            
            {/* passing TWO FUNCTIONS to ExpenseForm */}
            {isEditing && <ExpenseForm 
                onSaveExpense={saveExpenseHandler}
                onCancel={offEditingHandler} />}

        </div>
    )
    
}

export default NewExpense;