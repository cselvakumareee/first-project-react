import * as actionTypes from './Action/actionConstants';

const initialState:any = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action:any) => {
    
console.log(action.type);
  switch (action.type) {
      
    case actionTypes.INCREMENT:
      //WAY1: it will give copy of state, but its not a deep clone
      const newState = Object.assign({},state);
      newState.counter = state.counter +1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        //WAY2: spread operator taking out all values in state, and add the additional properties
        ...state,
        counter: state.counter - 1,
        //If property already exist in object, it will override the value
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case actionTypes.STORE_RESULT:
      const resultCounter = [...state.results];
      resultCounter.push({id: new Date(), value:state.counter});
      
      return {
       ...state,
       results: resultCounter
      };
      
      // return {
      //   ...state,
      //   results: state.results.concat({id: new Date(), value:state.counter})
      // }
      
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter((result:any)=> result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      };  
  }
  return state;
};

export default reducer;
