import useUserStore from '@/store/userstore';
import axios from 'axios';


const main = axios.create({
    baseURL: 'https://api.yourservice.com',
});

main.interceptors.request.use((config) => {
    let accessToken = null;

    if (typeof window !== 'undefined') {
        accessToken =
            useUserStore.getState().accessToken || localStorage.getItem('accessToken');
    } else {
        accessToken = useUserStore.getState().accessToken;
    }

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export default main;
