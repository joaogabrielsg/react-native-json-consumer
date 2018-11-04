import { FETCH_USERS_LIST_SUCCESS } from './actionTypes';

import { setMessage, setLoading } from './general';

export const fetchUsersList = () => {
  return dispatch => {
    dispatch(setLoading(true));
    fetch('https://s3-sa-east-1.amazonaws.com/pontotel-docs/data.json', {
      method: 'GET'
    })
      .catch(error => {
        dispatch(setLoading(false));
        dispatch(setMessage('Não foi possivel baixar o conteúdo'));
      })
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then(parsedResponse => {
        dispatch(setLoading(false));
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
