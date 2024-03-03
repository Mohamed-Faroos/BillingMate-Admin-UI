import axios, { AxiosError, AxiosResponse, HttpStatusCode, InternalAxiosRequestConfig } from "axios"

interface ApiHeaderProps {
    token?: string;
}

const networkClient = (headers?: ApiHeaderProps) => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:3000",
        timeout: 8000
    })

    axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        if (headers) {
            if (headers.token) {
                config.headers['Authorization'] = headers.token
            }
        }
        return config;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use((response: AxiosResponse) => {
        return response
    }, async (error) => {
        const originalRequest = error.config;
        if (error.response.status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
            originalRequest._retry = true;
            // const access_token = await refreshAccessToken();
            // axios.defaults.headers.common['Authorization'] = access_token;
            return axiosInstance(originalRequest);
        }

        return Promise.reject(error.response.data);
    })

    return axiosInstance;
}

export default networkClient;