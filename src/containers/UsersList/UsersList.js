import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';

const test = [{ id: '123312', name: 'gabriel', pwd: '411231' }, { id: '12', name: 'gabrielS', pwd: '4161231' }];

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = test.map(item => <ListItem data={item} />);

    return (
      <View style={styles.container}>
        <List listItems={items} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});

export default UsersList;
