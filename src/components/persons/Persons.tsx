import React, { Component } from 'react';
import Person from './Person/Person';

interface personsInterface {
    className: any;
    clicked: any;
    changed: any;
}

class Persons extends React.Component<personsInterface, {}> {
    // static getDerivedStateFromProps(props:any, state:any){
    //     console.log('[Persons.tsx] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps:any, nextState:any){
        console.log('[Persons.tsx] is shouldComponentUpdate', nextProps, this.props.className);
    //     if(nextProps.className !== this.props.className){
    //     return true;
    // }
    // else{
    //     return false;
    // }
       
    return true;
    }

    getSnapshotBeforeUpdate(prevProps:any, prevState:any){
        console.log('[Persons.tsx] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('[Persons.tsx] componetdidupdate');
    }

    componentWillUnmount(){
        console.log('[Persons.tsx] componentwillunmount');
    }

    render(){
        console.log('[persons.tsx] is rendering');
        return this.props.className.map((loopOfPerson:any, Index:any) =>{
            return( 
            <Person click = {()=> this.props.clicked(Index)}
            name = {loopOfPerson.name}
            age = {loopOfPerson.age} 
            key = {loopOfPerson.id}
            changed = {(event:any)=> this.props.changed(event, loopOfPerson.id)}/>
            );
        });
    }
    
};

export default Persons;