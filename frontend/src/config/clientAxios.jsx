import axios from 'axios';

const clientAxios = axios.create({
   // baseURL: '',
    baseURL: 'http://localhost:3000/api/sushi-store'
})

export default clientAxios;