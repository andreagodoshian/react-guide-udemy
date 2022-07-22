import React from "react";
import classes from "./UsersList.module.css";

import Card from "../UI/Card";

/*
main note about this component...
KEY is part of <li></li>

"Check the render method of `UsersList`
    at li
    at UsersList"
*/

function UsersList(props) {

    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map(x => (
                    <li key={x.id}>
                        {x.name} ({x.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )

}

export default UsersList;