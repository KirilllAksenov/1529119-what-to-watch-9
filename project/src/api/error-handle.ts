import request from 'axios';
import {store} from '../store';
import {clearErrorAction} from '../store/api-actions';
import {HttpCode} from '../const';
import { setError } from '../store/app-data/app-data';

export const errorHandle = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        handleError(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
