import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// createSlice: "slice of state" - get it??
// ...so all can be seen as "state snapshots"
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // this is acceptable, with @reduxjs/toolkit
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    // const show = useSelector((state) => state.counter.showCounter);
    // {show && <div className={classes.value}>{counter}</div>}
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;