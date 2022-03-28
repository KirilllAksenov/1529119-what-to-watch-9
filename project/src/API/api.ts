import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://9.react.pages.academy/wtw/';
const BACKEND_URL_FILMS = 'https://9.react.pages.academy/wtw/films/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  return api;
};

export const getFilms = async () => {
  const response = await axios.get(
    BACKEND_URL_FILMS,
  );
  return response.data;
};
