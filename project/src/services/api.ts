import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { toast } from 'react-toastify';

const SERVERURL = 'https://11.react.pages.academy/six-cities-simple';
const TIMEOUT = 5000;
export const createApi = () => {
  const api = axios.create({baseURL: SERVERURL, timeout: TIMEOUT});
  api.interceptors.request.use((config:AxiosRequestConfig) => {
    const token = getToken();
    if(token && config.headers){
      config.headers['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error:AxiosError<{error:string}>) => {
      if(error.response){
        if(error.response.status === 401 || error.response.status === 404 || error.response.status === 400){
          toast.warn(error.response.data.error);
        }
      }
    }
  );
};
