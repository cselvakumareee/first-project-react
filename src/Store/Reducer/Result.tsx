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
      const updatedArray = state.results.filter((result: any) => result.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

export default reducer;
