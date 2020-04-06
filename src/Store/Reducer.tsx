import React from 'react';
import Counter from '../containers/Counter/Counter';

const initialState = {
  counter: 0,
  results: new Array
};

const reducer = (state = initialState, action:any) => {
    
console.log(action.type);
  switch (action.type) {
      
    case 'INCREMENT':
      //WAY1: it will give copy of state, but its not a deep clone
      const newState = Object.assign({},state);
      newState.counter = state.counter +1;
      return newState;
    case 'DECREMENT':
      return {
        //WAY2: spread operator taking out all values in state, and add the additional properties
        ...state,
        counter: state.counter - 1,
        //If property already exist in object, it will override the value
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
    case 'STORE_RESULT':
      const resultFinal = Object.assign({},state);
      resultFinal.results = state.results.concat({id: state.counter, value:state.counter});
      return {
        ...state,
        results: resultFinal.results
      }
      
      // return {
      //   ...state,
      //   results: state.results.concat({id: new Date(), value:state.counter})
      // }
      
    case 'DELETE_RESULT':
      return state;  
    default:
        return state
  }
  //return state;
};

export default reducer;
