import React from 'react';
import Counter from '../containers/Counter/Counter';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action:any) => {
    
console.log(action.type);
  switch (action.type) {
      
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.val,
      };
    default:
        return state
  }
  //return state;
};

export default reducer;
