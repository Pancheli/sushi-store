import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {

            const token = localStorage.getItem('token');

            if(!token) {
                navigate('/login')
                return 
            }

            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/user/profile', config);
                setAuth(data);
                navigate('/')
            } catch (error) {
                setAuth({})
            }
        }

        autenticarUsuario()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
            }}
        >

            {children}

        </AuthContext.Provider>
    )
};

export {
    AuthProvider
}

export default AuthContext;