/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const Chat = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Text>
        This is the beginning of your legendary chat with user "unknown"
      </Text>
    </View>
  );
};

export default Chat;
