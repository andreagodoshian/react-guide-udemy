import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    let errorNullList = 
        <h2 className="expenses-list__fallback">
            No expenses found.</h2>;

    // REMEMBER: <ExpensesList items={filteredExpenses}/>
    if (props.items.length === 0) {
        return errorNullList;
    }

    return (
        <ul className="expenses-list">
            {props.items.map(x => (
                <ExpenseItem
                key={x.id}
                title={x.title}
                amount={x.amount}
                date={x.date}
                />
                ))
            };
        </ul>
    );
};

export default ExpensesList;