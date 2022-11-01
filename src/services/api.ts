/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BACKEND_URL, REQEST_TIMEOUT } from './../const/const';
import { processErrorHandle } from './../process-error-handle';
import axios, { AxiosInstance } from 'axios';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        processErrorHandle(error.message as string);
      }

      throw error;
    }
  );

  return api;
};
