import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// NOTE: PUT YOUR NOTES DOWN HERE!!
// otherwise, the console will get angry :(

//////////////////////////////////////////////////

// this is one of the first files to execute
// ...but only once, to render the root (<App/>)

// QUESTION: so... how do we update the screen???
// ANSWER: state
// state isn't a react-specific concept,
// but it's a core part of react

// EXAMPLE: want to update title onClick??
// need to reevaluate the entire function
// JUST BECAUSE there is an event,
// doesn't mean react will reevaluate anything