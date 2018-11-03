import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import UsersList from './src/containers/UsersList/UsersList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <UsersList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    height: 50
  }
});
