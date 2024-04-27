import axios from "axios";
import useUserStore from "../store/userstore";

export const baseURL = process.env.API_URL;

const main = axios.create({
    baseURL: "https://nouriva-backend.unedotampubolon.codes/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});

main.interceptors.request.use((config) => {
    const accessToken =
        useUserStore.getState().accessToken || localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});
export default main;