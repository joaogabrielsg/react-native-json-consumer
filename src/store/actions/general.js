import { SET_LOADING, SET_MESSAGE, CLEAR_MESSAGE } from './actionTypes';

export const setLoading = loading => ({
  type: SET_LOADING,
  loading
});

export const setMessage = message => ({
  type: SET_MESSAGE,
  message
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});
