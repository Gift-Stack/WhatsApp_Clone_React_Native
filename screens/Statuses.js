/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {statuses} from '../data';

const Statuses = ({}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchValue, onSearch] = React.useState('');
  const [boldChat, setBoldChat] = React.useState(false);

  const recentUpdates = statuses.filter(status => status.opened === false);
  const viewedUpdates = statuses.filter(status => status.opened === true);

  const onScroll = e => {
    if (e.nativeEvent.contentOffset.y > 45) {
      setBoldChat(true);
    } else {
      setBoldChat(false);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : boldChat ? '#F8F8F8' : '#f4f5ff',
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <View
          style={[
            styles.head,
            {backgroundColor: backgroundStyle.backgroundColor},
          ]}>
          <Text style={styles.customblue}>Privacy</Text>
          {boldChat && <Text style={styles.boldText}>Status</Text>}
        </View>
      </View>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={{backgroundColor: '#f4f5ff'}}>
        <Text style={{marginLeft: 15, fontSize: 40, fontWeight: '700'}}>
          Status
        </Text>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            onChangeText={onSearch}
            value={searchValue}
            placeholder="Search"
          />
          <Icon
            name="search"
            size={20}
            color="grey"
            style={{position: 'absolute', top: 22, left: 20}}
          />
        </View>
        <Text style={styles.updateType}>RECENT UPDATES</Text>
        <View style={[styles.recentUpdates, styles.updates]}>
          {recentUpdates?.map((status, index) => (
            <View key={status.name} style={styles.status}>
              <View style={styles.status_image}>
                <Image source={status.image} style={styles.image} />
              </View>
              <View
                style={[
                  styles.status_text,
                  {
                    borderBottomWidth:
                      recentUpdates.length - 1 === index ? 0 : 0.5,
                  },
                ]}>
                <Text style={styles.status_text_name}>{status.name}</Text>
                <Text style={styles.status_text_time}>{status.time} ago</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.updateType}>VIEWED UPDATES</Text>
        <View style={[styles.viewedUpdates, styles.updates]}>
          {viewedUpdates?.map((status, index) => (
            <View key={status.name} style={styles.status}>
              <View style={styles.status_image}>
                <Image source={status.image} style={styles.image} />
              </View>
              <View
                style={[
                  styles.status_text,
                  {
                    borderBottomWidth:
                      viewedUpdates.length - 1 === index ? 0 : 0.5,
                  },
                ]}>
                <Text style={styles.status_text_name}>{status.name}</Text>
                <Text style={styles.status_text_time}>{status.time} ago</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customblue: {
    color: '#669bfa',
    fontWeight: '500',
  },
  boldText: {
    fontWeight: '700',
    fontSize: 18,
  },
  body: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    borderRadius: 10,
    fontSize: 20,
  },
  updateType: {
    color: '#000',
    opacity: 0.7,
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 40,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  updates: {
    borderTopWidth: 0.5,
    borderTopColor: '#C4C4C4',
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  recentUpdates: {},
  status: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  status_image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  status_text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    borderBottomColor: '#C4C4C4',
  },
  status_text_name: {
    fontSize: 20,
    fontWeight: '600',
  },
  status_text_time: {
    fontSize: 16,
    color: '#a9a9a9',
  },
});

export default Statuses;
