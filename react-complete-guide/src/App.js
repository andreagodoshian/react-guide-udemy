// root.render(<App />);
import React from "react";

import Expenses from "./components/Expenses";

// Remember: props are being funneled FROM HERE!!
// App.js --> Expenses.js --> ExpenseItem.js --> ExpenseDate.js

/////////////////////////////////////////////

function App() {

  const expenses = [
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

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses}/>
  //   </div>
  // );

  return React.createElement("div", {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, {items: expenses})
  );



}

export default App;
