import React, {useState} from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title); // see notes

    const clickHandler = () => {
        setTitle("Updated!"); // see notes
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>TEST: change title</button>
        </Card>
    )
}

export default ExpenseItem;

///////////////////////////////////////
// Notes about this code:

// Question: how do we access the values from App.js ??
// Answer: parameters!! Well... NOT plural - only ONE param (props)

// 1. ) components in react are just functions 
// (special functions, of course)

// 2.) components are a combination of html (<div>), css (className), 
// and javascript (function, const, {expenseTitle}, etc)

// 3.) we type "className" because this isn't technically html... 
// it's special .jsx syntax invented by react

// 4.) onClick wants a function
// <button onClick={() => {console.log("Clicked!")}}>
// ...HOWEVER, using lamba/anonymous is discouraged 