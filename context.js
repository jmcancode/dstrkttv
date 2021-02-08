import React from "react";

export const AuthContext = React.createContext({
    appRead: false,
    toggleAppRead: () => {}
});
