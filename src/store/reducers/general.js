import { SET_LOADING, SET_MESSAGE, CLEAR_MESSAGE } from '../actions/actionTypes';

const initialState = {
  message: null,
  loading: false
};

const setLoading = (state, action) => {
  return { ...state, loading: action.loading };
};

const setMessage = (state, action) => {
  return { ...state, message: action.message };
};

const clearMessage = (state, action) => {
  return { ...state, message: null };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return setLoading(state, action);
    case SET_MESSAGE:
      return setMessage(state, action);
    case CLEAR_MESSAGE:
      return clearMessage(state, action);

    default:
      return state;
  }
};

export default reducer;
