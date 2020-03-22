import React, { Component, Fragment } from 'react';
import './Person.scss';
import Auxiliary from '../../../hoc/Auxiliary';
import PropTypes, { any } from 'prop-types';
import AuthContext from '../../../context/AuthContext';

interface personInterface {
  name: string;
  age: string;
  click: any;
  changed: any;
  isAuth: boolean;
 // inputElementRef: any;
}

class Person extends React.Component<personInterface,{}> {
    constructor(props:any){
        super(props)
        // this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

  componentDidMount(){
     // this.inputElement.focus();
     console.log(this.context.authenticate);
  }

  componentDidUpdate(){
    console.log(this.context.authenticate);
  }
  render() {
    console.log('[person.tsx] is rending');
    return (
    <div className="person">
    {/* <Fragment> */}
    
    {this.context.authenticate ? <p>Authenticated</p>:<p>please login</p>}
    
    
        <h4 key="i1" onClick={this.props.click}>
          I am {this.props.name} with {this.props.age} age
        </h4>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} />
      
      {/* </Fragment> */}
      </div>
      );
  }
}


export default Person;
 