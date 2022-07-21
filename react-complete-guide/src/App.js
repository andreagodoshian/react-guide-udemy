import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Remember: everything is being funneled FROM HERE!!
// root.render(<App />);
/////////////////////////////////////////////

function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (event) => {
    console.log("We made it to App.js!! WOO!");
    setExpenses(prevExpenses => {
      return [event, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );

  /////////////////////////////////////////////
  // old (legacy) react syntax....

  // return React.createElement("div", {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

}

export default App;

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Increase to non-amicable Divorce',
    amount: 3000,
    date: new Date("2021-06-21T00:00:00")
  },
  { 
    id: 'e2',
    title: 'SheCodes :)', 
    amount: 999.99, 
    date: new Date("2021-09-17T00:00:00")
  },
  {
    id: 'e3',
    title: 'Fighting for my Degree',
    amount: 1009.67,
    date: new Date("2021-11-25T00:00:00")
  },
  {
    id: 'e4',
    title: 'Student Loan Debt (recurring)',
    amount: 500,
    date: new Date("2022-06-01T00:00:00")
  },
];