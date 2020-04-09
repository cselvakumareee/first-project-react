import * as actionTypes from '../Action/actionConstants';

const initialState: any = {
  results: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const resultCounter = [...state.results];

      //The below code we need counter value from counterReducer
      //We cant access counterReducer from resultReducer so we are receiving value as a action in counter.tsx
      resultCounter.push({ id: new Date(), value: action.counterValue });

      return {
        ...state,
        results: resultCounter,
      };

    case actionTypes.DELETE_RESULT:
      //Note: the below splice method will work only when you will pass, index of element
      const deletedUpdatedArrayFilter = [...state.results];
             deletedUpdatedArrayFilter.splice(action.resultElId, 1);   
            return {
                ...state,
                results: deletedUpdatedArrayFilter
            }
      // Note: the below method also working      
      // const updatedArray = state.results.filter((result: any) => result.id !== action.resultElId);
      // return {
      //   ...state,
      //   results: updatedArray,
      // };
  }
  return state;
};

export default reducer;
