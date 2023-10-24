import { useState, useContext, createContext, useEffect } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({});

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(auth));
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
};

export const useAuthContext = () => {
    return useContext(AuthContext);
}