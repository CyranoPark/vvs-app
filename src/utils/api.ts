import axios from 'axios';
import qs from 'qs';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 5000,
    withCredentials: true,
    paramsSerializer: (params: any) => qs.stringify(params, { indices: false }),
});

export default api;
