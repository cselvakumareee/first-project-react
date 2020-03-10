import React, { Component } from 'react';
import './Person.scss';

 interface personInterface {
    name: string;
    age: string;
    click: any;
    changed: any;
}

class Person extends React.Component<personInterface, {}> {
    
    render(){
        console.log('[person.tsx] is rending');
        return(
            <div className = "person">
                <h4 onClick = {this.props.click}>I am {this.props.name} with {this.props.age} age</h4>
        <p>{this.props.children}</p>
        <input type="text" onChange = {this.props.changed}/>
            </div>
        );
    }
   
}; 
 
export default Person;