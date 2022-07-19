// remember: components in react are just functions, with
// the extra twist of returning this .jsx code

import "./ExpenseDate.css";

////////////////////////////////////////////////////////////

// Remember: props are being funneled
// App.js --> Expenses.js --> ExpenseItem.js --> ExpenseDate.js

function ExpenseDate(props) {

    const day = props.date.toLocaleString("en-us", {day: "2-digit"});
    const month = props.date.toLocaleString("en-us", {month: "long"});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )

}

export default ExpenseDate;