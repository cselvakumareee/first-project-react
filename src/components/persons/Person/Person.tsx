import React from 'react';
import './Person.scss';

const person = (props:any) => {
   return(
       <div className = "person" onClick = {props.click}>
           <h4>I am {props.name} with {props.age} age</h4>
   <p>{props.children}</p>
   <input type="text" onChange = {props.changed}/>
       </div>
   );
}; 

export default person;