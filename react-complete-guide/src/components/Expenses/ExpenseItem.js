import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

// Question: how do we access the values from App.js ??
// Answer: parameters!! Well... NOT plural - only ONE param (props)

function ExpenseItem(props) {

    const clickHandler = () => {
        console.log("Clicked :)");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>TEST: change title</button>
        </Card>
    )
}

export default ExpenseItem;

///////////////////////////////////////
// Notes about this code:

// 1. ) components in react are just functions 
// (special functions, of course)

// 2.) components are a combination of html (<div>), css (className), 
// and javascript (function, const, {expenseTitle}, etc)

// 3.) we type "className" because this isn't technically html... 
// it's special .jsx syntax invented by react

// 4.) onClick wants a function
// <button onClick={() => {console.log("Clicked!")}}>
// ...HOWEVER, using lamba/anonymous is discouraged 