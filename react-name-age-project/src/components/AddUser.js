import React from "react"; // "You're not wrong"

function AddUser() {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    // since this is .jsx (just like className),
    // it has to be <label htmlFor="name">
    // **accessability, screen-readers, etc**

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text"/>

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>

                <button type="submit">Add User</button>
            </form>
        </div>
    )

}

export default AddUser;
// remember: just export the pointer
// (I had a dream about Mr. Chompy last night - I'm surprised that he remembers me... I'm depressed now)
// 22 July 2022