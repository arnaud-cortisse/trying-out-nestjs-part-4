import axios, { AxiosRequestConfig } from "axios";

export const axiosBaseUrl = `${process.env.REACT_APP_BACKEND_SCHEMA}://${process.env.REACT_APP_BACKEND_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`;

export const axiosConfig: AxiosRequestConfig = {
  baseURL: axiosBaseUrl,
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
