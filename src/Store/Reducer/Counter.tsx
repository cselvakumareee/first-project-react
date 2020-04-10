import * as actionTypes from '../Action/actionConstants';
import { updateObject } from '../Utility';

const initialState: any = {
  counter: 0,
};

const reducer = (state = initialState, action: any) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.INCREMENT:
      //WAY1: it will give copy of state, but its not a deep clone
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        //WAY2: spread operator taking out all values in state, and add the additional properties
        ...state,
        counter: state.counter - 1,
        //If property already exist in object, it will override the value
      };

    case actionTypes.ADD:
      return updateObject(state, {counter: state.counter + action.val})
      // return {
      //   ...state,
      //   counter: state.counter + action.val,
      // };
    case actionTypes.SUBTRACT:
      //Note //This is one way using Utility
      return updateObject(state, {counter: state.counter - action.val})
      //This is another way
      // return {
      //   ...state,
      //   counter: state.counter - action.val,
      // };
  }
  return state;
};

export default reducer;
