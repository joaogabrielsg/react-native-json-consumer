import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const List = ({ listItems }) => (
  <View style={styles.container}>
    <FlatList
      data={listItems}
      renderItem={item => {
        return <View style={styles.list}>{item.item}</View>;
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  list: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default List;
