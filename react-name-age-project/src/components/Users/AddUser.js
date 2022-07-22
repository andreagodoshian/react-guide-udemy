import React, {useState} from "react"; // "You're not wrong"
import classes from "./AddUser.module.css"

import Card from "../UI/Card";
import Button from "../UI/Button";

function AddUser(props) {

    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)};

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)};

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) return;
        if (+enteredAge < 1) return;
        
        props.onAddUser(enteredName, enteredAge); //console.log(enteredName, enteredAge)
        
        setEnteredName("")
        setEnteredAge("")};

    // since this is .jsx (example: className),
    // it has to be <label htmlFor="name">
    // **accessability, screen-readers, etc**

    return (
        <Card className={classes.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input onChange={nameChangeHandler}
                    value={enteredName}
                    id="name" type="text"/>

                <label htmlFor="age">Age (Years)</label>
                <input onChange={ageChangeHandler}
                    value={enteredAge}
                    id="age" type="number"/>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser;
// remember: just export the pointer
// (I had a dream about Mr. Chompy last night - I'm surprised that he remembers me... I'm depressed now)
// 22 July 2022