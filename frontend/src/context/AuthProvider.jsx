import { useState, useContext, createContext } from "react";
import clienteAxios from '../config/clientAxios';

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