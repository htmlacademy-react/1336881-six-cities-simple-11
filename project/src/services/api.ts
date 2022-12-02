import axios from 'axios';

const SERVERURL = 'https://11.react.pages.academy/six-cities-simple';
const TIMEOUT = 5000;
export const createApi = () => axios.create({baseURL: SERVERURL, timeout: TIMEOUT});
