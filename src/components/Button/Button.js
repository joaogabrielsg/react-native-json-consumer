import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';

import { colors, metrics } from '../../styles';

const CustomButton = ({ title, size, onPress, loading, disable }) => {
  let buttonSize;

  switch (size) {
    case 'large':
      buttonSize = metrics.contentWidth;
      break;

    case 'medium':
      buttonSize = Dimensions.get('window').width * 0.4;
      break;

    default:
      break;
  }

  return (
    <View style={{ width: buttonSize }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disable}
        style={disable ? [styles.defaultButton, styles.disableButton] : [styles.defaultButton, styles.activeButton]}
      >
        <Text style={styles.titleButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    alignItems: 'center',
    padding: Dimensions.get('window').height * 0.025,
    borderWidth: 0,
    borderRadius: 12
  },
  activeButton: {
    backgroundColor: colors.primary
  },
  disableButton: {
    backgroundColor: colors.disableButton
  },
  titleButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  disable: PropTypes.bool
};

CustomButton.defaultProps = {
  color: 'default',
  size: 'large',
  disable: false
};

export default CustomButton;
