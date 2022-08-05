import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

/*
1.) Plain react-redux...
-typos (example: action.type === 'increment')
-have to copy all of the "params"
return { count: state.count, show: state.show, ETC}
-have to always respect state immutability
bad- state.counter++ || good- counter: state.counter

2.) Cue '@reduxjs/toolkit' :-)
This was developed by the react-redux team...
...so it's a "safe" option

3.) How do we connect this "store" to the app?
Remember: with Redux, only ONE store...
so we only need to "provide" it once 
***see src/index.js***
*/

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});
  
export default store;