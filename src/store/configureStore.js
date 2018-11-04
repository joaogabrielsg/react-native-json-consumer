import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import usersListReducer from './reducers/userList';
// import generalReducer from './reducers/general';

const rootReducer = combineReducers({
  usersList: usersListReducer
});

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
};

export default configureStore;
