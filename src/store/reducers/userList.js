import { FETCH_USERS_LIST_SUCCESS } from '../actions/actionTypes';

const initialState = {
  usersList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LIST_SUCCESS:
      return { ...state, usersList: action.usersList };

    default:
      return state;
  }
};

export default reducer;
