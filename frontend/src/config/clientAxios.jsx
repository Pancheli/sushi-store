import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'http://192.168.1.112:3000/api/sushi-store',
    // baseURL: 'http://localhost:3000/api/sushi-store'
})

export default clientAxios;