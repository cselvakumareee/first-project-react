import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/Redux-Components/CounterControl/CounterControl';
import CounterOutput from '../../components/Redux-Components/CounterOutput/CounterOutput';

interface ICounterProps{
    ctr:any,
   onIncrementCounter: any,
   onDecrementCounter:any,
   onAddCounter:any,
   onSubtractCounter:any
}


class Counter extends Component<ICounterProps,{}> {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter()}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter()}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter()}  />
                
            </div>
        );
    }
}

const mapStateToProps = (state:any) =>{
    return {
        ctr: state.counter
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
        onSubtractCounter: ()=> dispatch({type:'SUBTRACT', val:15})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);