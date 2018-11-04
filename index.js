import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
