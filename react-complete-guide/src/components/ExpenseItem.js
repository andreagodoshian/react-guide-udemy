// a component in react is just a function
// ...it's a special function, of course :)

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// components are also a combination of 
// html (<div>), css (className), 
// and javascript (function, const, {expenseTitle}, etc)

////////////////////////////////////////////////////////////

// Question: how do we access the values from App.js ??
// Answer: parameters!! Well... NOT plural - only ONE param (props)

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;

// remember: we type "className" because this isn't technically
// html... it's special .jsx syntax invented by react