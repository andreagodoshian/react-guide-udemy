import React, {useState} from "react";
import "./ExpenseForm.css";

// the "props" is the function from NewExpense
function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    // ALTERNATIVE APPROACH:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    // naming theory: title + onChange + Handler
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // INCORRECT ALTERNATIVE APPROACH:
    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     });
    // }

    // CORRECT ALTERNATIVE APPROACH:
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value}
    //     });
    // }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    // we get the "event" param automatically
    const submitHandler = (event) => {
        event.preventDefault();

        // if you used alternative approach, 
        // everything is already combined
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // ***this is where we incorporate props***
        props.onSaveExpense(expenseData);
        setEnteredTitle(""); // clear without refreshing
        setEnteredAmount("");
        setEnteredDate("");
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

    return (
        <form onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    {/* NO PARENTHESIS! We just point! */}
                    <input type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__controls">
                    <label>Amount</label>
                    {/* NO PARENTHESIS! We just point! */}
                    <input type="number" 
                    value={enteredAmount}
                    onChange={amountChangeHandler} 
                    min="0.01" step="0.01"/>
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    {/* NO PARENTHESIS! We just point! */}
                    <input type="date" 
                    value={enteredDate}
                    onChange={dateChangeHandler} 
                    min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                {/* onCancel={offEditingHandler}  */}
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>

        </form>
    )

}

export default ExpenseForm;

/////////////////////////////////////////////
// MORE NOTES!! YOU CAN NEVER HAVE ENOUGH NOTES!!
// (actually, yes you can, but whatevs 🤷‍♀️)

// event listeners:
// these are required to receive input.
// a good rule of thumb is that they start with "on..."
// example: onChange, onClick, onABORT (lol)
// --event listeners typically want a function--

// useState:
// databases aside, how do we at least temporarily
// store the change?? 
// also... we can call useState() more than once - and
// this is actually a good thing, so that when we update
// the title, the other states aren't updating by default

// submit:
// in order to combine all of the states (or, later, save)
// we need to combine everything with submit
// why dont we use onClick? because onClick has a default
// behavior. AND. if we already declared the button type
// as submit (within a form, nonetheless), then there are
// other default behaviors that we can utilize

// two way binding:
// we aren't just listening - we are also feeding the state
// back into the input (no; it's not an infinite loop)
// this is achieved with the value={} attribute