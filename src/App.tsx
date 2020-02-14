import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';
import { render } from '@testing-library/react';

class App extends Component{
  state={
    className:[
      { name:"selva", age: 40},
      { name:"raja", age: 80},
      { name:"shiva", age: 60}
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

  nameChangeHandler = (eventName:any) =>
  this.setState({
    className:[
    { name:"selvakumar c", age: 40},
    { name:"raja dhaya", age: 80},
    { name:"shiva j", age: 60}
    ]
  })

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
           {this.state.className.map((loopOfPerson, Index) =>{
             return <Person click = {()=> this.deleteEventHandler(Index)}
             name = {loopOfPerson.name}
             age = {loopOfPerson.age} />

           })}
         </div>
      );
    }
    return(
      <div className = "App">
        <header className = "App-header">
          <button style = {appStyle}>Click me</button>
          {personName}
        </header>
      </div>
    )
  }
}



export default App;
