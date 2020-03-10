import React, { Component } from 'react';
import './App.scss';
import Persons from '../components/persons/Persons';

class App extends Component{
  state={
    className:[
      { id:'1', name:"selva", age: 40},
      { id:'2', name:"raja", age: 80},
      { id:'3', name:"shiva", age: 60}
    ],
    showPerson: true,
  };

  clickEventHandler = (newName:any) =>
  this.setState({
    className:[
      { name:"selvakumar c", age: 40},
      { name:"raja dhaya", age: 80},
      { name:"shiva j", age: 60}
    ]
  })

  nameChangeHandler = (eventName:any, id:any) => {
  const personIndex = this.state.className.findIndex(p =>{
    return p.id === id;
  });

  const person = {
    ...this.state.className[personIndex]
  };
  person.name = eventName.target.value;

  const className = [...this.state.className];
  
  className[personIndex] = person;
  this.setState({className:className});
  }
  // this.setState({
  //   className:[
  //   { name:"selvakumar c", age: 40},
  //   { name:"raja dhaya", age: 80},
  //   { name:"shiva j", age: 60}
  //   ]
  // })

  toggleEventHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  deleteEventHandler = (personDelIndex:any) =>{
    const personDel = this.state.className;
    personDel.splice(personDelIndex,1);
    this.setState({personDel:personDel});
  }

  render(){

    const appStyle = {
      backgroundColor: 'pink',
    };

    let personName = null;
    if(this.state.showPerson){
      personName = (
         <div>
           <Persons className = {this.state.className}
           clicked = {this.deleteEventHandler}
           changed = {this.nameChangeHandler}/>
         </div>
      );
    }
    return(
      <div className = "App">
        <header className = "App-header">
          <button onClick = {this.toggleEventHandler} style = {appStyle}>Click me</button>
          {personName}
        </header>
      </div>
    )
  }
}



export default App;
