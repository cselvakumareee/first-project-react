import React, { useContext } from 'react';
import Auth_Context from '../Hooks-components/Auth-context';

const Auth = (props:any) => {
    const auth = useContext(Auth_Context);
    return <button onClick={auth.login}>Login</button>
};

export default Auth;