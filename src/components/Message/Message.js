import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Modal } from 'react-native';

import { metrics, colors, fonts } from '../../styles';
import Button from '../Button/Button';

const Message = ({ title, message, buttonText, open, onClose }) => (
  <View style={styles.container}>
    <Modal visible={open} transparent={true} animationType={'fade'}>
      <View style={styles.fullScreenView}>
        <View style={styles.messageView}>
          <View style={styles.messageContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.messageText} numberOfLines={3}>
              {message}
            </Text>
            <Button color="primary" title={buttonText} onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.statusBarHeight
  },
  fullScreenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)'
  },
  messageView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.messageBackground,
    height: metrics.alertHeight,
    width: '90%',
    borderRadius: metrics.borderRadius
  },
  messageContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70%',
    width: '90%'
  },
  title: {
    color: colors.messageText,
    fontSize: fonts.messageTitle,
    fontWeight: '800'
  },
  messageText: {
    textAlign: 'center',
    color: colors.messageText,
    fontSize: fonts.messageText
  }
});

Message.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

export default Message;
