// THERE ARE SHORTCUTS FOR THIS!! 
// <React.Fragment> and <></>
// BUT I'M SAVING THIS FILE, FOR POSTERITY!!!!!!!!!!!!

function Wrapper(props) {
    return props.children;
}

export default Wrapper;

/*
how do we avoid "<div> soup"??

we aren't technically writing any .jsx
so we don't need to import React

remember: the "children" prop holds all of the 
content that you're passing between the
opening and closing tags

YES, THIS IS TECHNICALLY LEGAL
and this way, the console isn't wasting time/space
rendering a bunch of null divs
*/