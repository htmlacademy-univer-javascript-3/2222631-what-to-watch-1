import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { getToken } from './token';
import {StatusCodes} from 'http-status-codes';
import { errorHandler } from './error-handler';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const BASE_API_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 60 * 1000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        errorHandler(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};
