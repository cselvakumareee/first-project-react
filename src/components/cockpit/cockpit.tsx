import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Cockpit = (props:any) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        console.log('[cockpit.tsx] useEfect');
        //totoggleBtnRef.current.click();
        // setTimeout(()=>{
        //     alert('Hi');
        // },1000);
        return(()=>{
            alert('cockpit.tsx cleanup is worked');
        })
    },[]);
return (
    <header className = "App-header">
        <button ref={toggleBtnRef} onClick = {props.clicked}>Click me</button>
        
        <button onClick = {authContext.login}>login</button>
        
    </header>
);
};

export default Cockpit;