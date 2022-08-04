import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';

/*
1.) This is the "highest level" (top of component tree),
because this is where we are rendering <App />
2.) Remember React Context? Even then, we wrapped <App />
Example: <AuthContextProvider><App/></AuthContextProvider>
3.) You don't HAVE to render <Provider/> here... but if 
the entire <App/> needs access, then this is the best place
4.) Although Redux is "only one store," still need to declare
Example: <Provider store={store}>
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);