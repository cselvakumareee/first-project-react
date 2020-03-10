import React from 'react';
import Person from './Person/Person';

const Persons = (props:any) => (
    props.className.map((loopOfPerson:any, Index:any) =>{
        return <Person click = {()=> props.clicked(Index)}
        name = {loopOfPerson.name}
        age = {loopOfPerson.age} 
        key = {loopOfPerson.id}
        changed = {(event:any)=> props.changed(event, loopOfPerson.id)}/>

    })
);

export default Persons;