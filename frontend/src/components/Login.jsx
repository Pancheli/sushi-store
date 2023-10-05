import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clientAxios from "../config/clientAxios";

const Login = () => {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [pasword, setPassword] = useState('');
    const [message, setMessage] = useState({
        show: false,
        text: '',
        color: ''
    });
}