import React, {useState} from "react";

import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"

import Card from "../UI/Card";

// main note about this component:
// since rendering a list, don't forget "key" (@Id) prop
// (revisit max's video which explains why)

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };
  
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
          <Card className='expenses'>
            <ExpenseFilter
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />

            <ExpensesChart expenses={filteredExpenses}/>

            <ExpensesList items={filteredExpenses}/>

            {/* AN ALTERNATIVE METHOD!!!
            
            {filteredExpenses.length === 0 && (
                <h5>No expenses found!</h5>
            )};
            
            {filteredExpenses.length > 0 && (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}; */}

            {/* ANOTHER ALTERNATIVE METHOD!!!
            
            {filteredExpenses.length === 0 ? (
                <h5>No expenses found!</h5>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}; */}

          </Card>
        </div>
      );
    };

export default Expenses;