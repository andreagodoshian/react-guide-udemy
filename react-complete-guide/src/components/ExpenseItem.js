// a component in react is just a javascript function
// ...it's a special function, of course :)

import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>18 July 2022</div>
            <div className="expense-item__description">
                <h2>Baking Supplies</h2>
                <div className="expense-item__price">Amount</div>
            </div>
        </div>
    )
}

export default ExpenseItem;