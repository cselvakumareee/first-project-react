import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/Action/Index';

import CounterControl from '../../components/Redux-Components/CounterControl/CounterControl';
import CounterOutput from '../../components/Redux-Components/CounterOutput/CounterOutput';

interface ICounterProps{
    ctr:any,
   storedResults:any
   onIncrementCounter: any,
   onDecrementCounter:any,
   onAddCounter:any,
   onSubtractCounter:any,
   onStoreResult:any,
   onDeleteResult:any
}


class Counter extends Component<ICounterProps,{}> {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                {/* Note: The above code ctr is ctr: state.ctr.counter, it will directly give counter value */}
                  <ul>
                     {this.props.storedResults.map((strResult:any, index:any) => {
                     return <li onClick={()=>this.props.onDeleteResult(index)} key={strResult.id}>{strResult.value}</li>
                    })} 
                    
                </ul> 
                
            </div>
        );
    }
}

const mapStateToProps = (state:any) =>{
    
    console.log(state);
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
        //state.ctr its used for accessing states in corresponding reducers
        //As of now counterReducer containing counter state only vice versa resultReducer containing result state only
        //state.ctr and state.res used for accessing counter & results values in global state
    };
}; 
const mapDispatchToProps = (dispatch:any) =>{
    console.log(dispatch);
    return {
        onIncrementCounter: ()=> {
            console.log('increment');
            dispatch(actionCreators.increment())},
        onDecrementCounter: ()=> dispatch(actionCreators.decrement()),
        onAddCounter: ()=> dispatch(actionCreators.add(10)),
        onSubtractCounter: ()=> dispatch(actionCreators.subtract(10)),
        //Note: the below code counterVal is actual counter value from counterReducer
        onStoreResult: (counterVal:any)=> dispatch(actionCreators.storeResult(counterVal)),
        onDeleteResult: (index:any)=> dispatch(actionCreators.deleteResult(index))

        // onIncrementCounter: ()=> {
        //     console.log('increment');
        //     dispatch({type: actionTypes.INCREMENT})},
        // onDecrementCounter: ()=> dispatch({type: actionTypes.DECREMENT}),
        // onAddCounter: ()=> dispatch({type: actionTypes.ADD, val:10}),
        // onSubtractCounter: ()=> dispatch({type: actionTypes.SUBTRACT, val:10}),
        // //Note: the below code counterVal is actual counter value from counterReducer
        // onStoreResult: (counterVal:any)=> dispatch({type: actionTypes.STORE_RESULT, counterValue:counterVal}),
        // onDeleteResult: (index:any)=> dispatch({type: actionTypes.DELETE_RESULT, resultElId:index}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);