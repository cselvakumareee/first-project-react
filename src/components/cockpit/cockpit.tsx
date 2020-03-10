import React, { useEffect } from 'react';

const Cockpit = (props:any) => {
    useEffect(()=>{
        console.log('[cockpit.tsx] useEfect');
        setTimeout(()=>{
            alert('Hi');
        },1000);
        return(()=>{
            alert('cockpit.tsx cleanup is worked');
        })
    },[]);
return (
    <header className = "App-header">
        <button onClick = {props.clicked}>Click me</button>
        
    </header>
);
};

export default Cockpit;