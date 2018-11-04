import { FETCH_USERS_LIST_SUCCESS } from './actionTypes';

export const fetchUsersList = () => {
  return dispatch => {
    fetch('https://s3-sa-east-1.amazonaws.com/pontotel-docs/data.json', {
      method: 'GET'
    })
      .catch(error => console.error(error))
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then(parsedResponse => {
        dispatch(fetchUsersListSuccess(parsedResponse.data));
      });
  };
};

export const fetchUsersListSuccess = usersList => {
  return {
    type: FETCH_USERS_LIST_SUCCESS,
    usersList: usersList
  };
};
