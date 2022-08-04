import { createStore } from 'redux'

/*
1.) How do we connect this "store" to the rest of the app?
Since we're using Redux, we only have ONE store... therefore,
we only need to "provide" it once ***see src/index.js***
*/
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
}

const store = createStore(counterReducer);

export default store; 
//^^ const store = createStore(counterReducer);