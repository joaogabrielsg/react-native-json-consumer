import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.text}>id: {data.id}</Text>
    <Text style={styles.text}>name: {data.name}</Text>
    <Text style={styles.text}>pwd: {data.pwd}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b478e',
    width: '80%',
    padding: 20,
    borderRadius: 15
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20
  }
});

ListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    pwd: PropTypes.string
  }).isRequired
};

export default ListItem;
