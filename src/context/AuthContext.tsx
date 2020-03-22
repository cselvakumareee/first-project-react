import React from 'react';

const AuthContext = React.createContext({
    authenticate: false,
    login: () => {}
});

export default AuthContext;