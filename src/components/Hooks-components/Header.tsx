import React, { useContext } from 'react';
import Auth_Context from '../Hooks-components/Auth-context';

const Header = (props:any) => {
    const auth = useContext(Auth_Context);
    return(
    <header>
        {auth.status?<button onClick={props.onLoadTodos}>Todo List</button>:null}
        <button onClick={props.onLoadAuth}>Auth</button>
    </header>
    );
};

export default Header;