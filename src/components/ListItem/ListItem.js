import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const ListItem = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.text}>id: {data.id}</Text>
    <Text style={styles.text}>name: {data.name}</Text>
    <Text style={styles.text}>pwd: {data.pwd}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '80%',
    padding: 20,
    borderRadius: metrics.borderRadius
  },
  text: {
    textAlign: 'center',
    color: colors.messageText,
    fontSize: fonts.default
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
