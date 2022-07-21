import React from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function ExpenseItem(props) {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;

///////////////////////////////////////
// Notes...

// Question: how do we access the values from App.js ??
// Answer: parameters!! Well... NOT plural - only ONE param (props)

// 1.) components in react are just functions 
// (special functions, of course)

// 2.) components are a combination of html (<div>), css (className), 
// and javascript (function, const, {expenseTitle}, etc)

// 3.) we type "className" because this isn't technically html... 
// it's special .jsx syntax invented by react