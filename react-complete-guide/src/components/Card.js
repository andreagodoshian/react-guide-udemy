import "./Card.css";

function Card(props) {

    const classes = "card " + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
    
}

export default Card;

///////////////////////////////////////

// Notes about this code:
// "children" is a reserved name in react and the value is 
// ALWAYS the content between the opening and closing tags

// ALSO!

// In order the prevent this from overwriting all other .css,
// we need "const classes = 'card ' + props.className;" 