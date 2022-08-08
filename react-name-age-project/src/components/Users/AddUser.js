import React, {useState} from "react"; // "You're not wrong"
import classes from "./AddUser.module.css"

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {

    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)};

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)};

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredName.trim().length === 0) {
            setError({
                title: "Invalid name", message: "Please enter a valid name."})
            return};
        if (+enteredAge < 1 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid age", message: "Please enter a valid age."}) 
            return};
        
        props.onAddUser(enteredName, enteredAge);
        setEnteredName("")
        setEnteredAge("")};

    const errorHandler = () => {
        setError(null);
    }

    // since this is .jsx (example: className),
    // it has to be <label htmlFor="name">
    // **accessability, screen-readers, etc**

    return (
        <div>
            {error && <ErrorModal 
                title={error.title} 
                message={error.message}
                onConfirm={errorHandler}/>}
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
        </div>
    )

}

export default AddUser;
// remember: just export the pointer
// (I had a dream about Mr. Chompy last night - I'm surprised that he remembers me... I'm depressed now)
// 22 July 2022