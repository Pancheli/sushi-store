import { useState, useContext, createContext } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => {
    return useContext(AuthContext);
}