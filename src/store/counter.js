import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = { value: 0, showCounter: false };

/* const counterReducer = (state = counterInitialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'duplicate') {
    return {
      counter: state.counter * action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
}; */

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    duplicate(state, action) {
      state.value = state.value * action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
