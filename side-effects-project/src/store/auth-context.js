import React from "react";

// the file is spelled auth-context.js ??
// that's because it's not a component

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}
});

// however, the const is spelled "AuthContext" 
// because it will contain components

export default AuthContext;

////////////////////////////////////////

/*
General note:
This way, we aren't passing props through
ten different components
*/