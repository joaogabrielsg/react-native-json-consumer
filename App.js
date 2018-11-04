import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import UsersList from './src/containers/UsersList/UsersList';

import withMessage from './src/hoc/withMessage';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('ponto-digital.UsersList', () => withMessage(UsersList), store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'ponto-digital.UsersList',
    title: 'Welcome'
  }
});
