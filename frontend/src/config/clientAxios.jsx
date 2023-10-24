import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://g80vl1cv-3000.brs.devtunnels.ms/api/sushi-store',
    // baseURL: 'http://localhost:3000/api/sushi-store'
})

export default clientAxios;