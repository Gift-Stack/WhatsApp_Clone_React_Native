/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({navigation}) => {
  const activeTab = navigation.getState().routes[navigation.getState().index];
  return (
    <View style={styles.footer}>
      <View style={styles.iconContainer}>
        <Icon
          name="circle"
          size={25}
          color={activeTab.name === 'Status' ? '#669bfa' : '#888'}
          onPress={() => navigation.navigate('Status')}
        />
        <Text
          style={[
            styles.text,
            {color: activeTab.name === 'Status' ? '#669bfa' : '#888'},
          ]}>
          Status
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="phone"
          size={25}
          color={activeTab.name === 'Calls' ? '#669bfa' : '#888'}
        />
        <Text
          style={[
            styles.text,
            {color: activeTab.name === 'Calls' ? '#669bfa' : '#888'},
          ]}>
          Calls
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="camera"
          size={25}
          color={activeTab.name === 'Camera' ? '#669bfa' : '#888'}
        />
        <Text
          style={[
            styles.text,
            {color: activeTab.name === 'Camera' ? '#669bfa' : '#888'},
          ]}>
          Camera
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="comments"
          size={25}
          color={activeTab.name === 'Chats' ? '#669bfa' : '#888'}
          onPress={() => navigation.navigate('Chats')}
        />
        <Text
          style={[
            styles.text,
            {color: activeTab.name === 'Chats' ? '#669bfa' : '#888'},
          ]}>
          Chats
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="cog"
          size={25}
          color={activeTab.name === 'Settings' ? '#669bfa' : '#888'}
        />
        <Text
          style={[
            styles.text,
            {color: activeTab.name === 'Settings' ? '#669bfa' : '#888'},
          ]}>
          Settings
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 0.5,
    borderTopColor: '#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginHorizontal: 15,
    marginBottom: 20,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
});
