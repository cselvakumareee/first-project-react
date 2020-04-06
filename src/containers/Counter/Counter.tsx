import React, { Component } from 'react';
import { connect } from 'react-redux';

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
   //onDeleteResult:any
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
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((strResult:any) => {
                     return <li key={strResult.id}>{strResult.value}</li>
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state:any) =>{
    
    console.log(state);
    return {
        ctr: state.counter,
        storedResults: state.results,
    };
}; 
const mapDispatchToProps = (dispatch:any) =>{
    console.log(dispatch);
    return {
        onIncrementCounter: ()=> {
            console.log('increment');
            dispatch({type:'INCREMENT'})},
        onDecrementCounter: ()=> dispatch({type:'DECREMENT'}),
        onAddCounter: ()=> dispatch({type:'ADD', val:10}),
        onSubtractCounter: ()=> dispatch({type:'SUBTRACT', val:10}),
        onStoreResult: ()=> dispatch({type:'STROE_RESULT'}),
        OnDeleteResult: ()=> dispatch({type:'DELETE_RESULT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);