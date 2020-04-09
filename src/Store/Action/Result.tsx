import * as actionTypes from './actionConstants'; 

//Action Creators
export const saveResult = (counterVal:any) =>{
    //const updatedValue = counterVal * 2;
    return{
        type: actionTypes.STORE_RESULT,
        counterValue: counterVal
    }
}
//Note: first inside set timeout will work after that it return dispatch, its everything will work help of thunk
export const storeResult = (counterVal:any) => {
    return (dispatch:any, getState:any)=>{
        setTimeout(()=>{
           const oldCounter = getState().ctr.counter;
           console.log("old counter"+oldCounter);
           dispatch(saveResult(counterVal));
        }, 2000)
    };
};

export const deleteResult = (index:any) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: index
    };
};