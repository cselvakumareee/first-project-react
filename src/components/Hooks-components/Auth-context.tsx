import React from 'react';

const Auth_Context = React.createContext({status: false, login: ()=>{}});

export default Auth_Context;