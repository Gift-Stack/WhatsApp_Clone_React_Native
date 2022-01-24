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
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {chats} from '../../../data';

const ChatList = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchValue, onSearch] = React.useState('');
  const [boldChat, setBoldChat] = React.useState(false);

  const onScroll = e => {
    if (e.nativeEvent.contentOffset.y > 45) {
      setBoldChat(true);
    } else {
      setBoldChat(false);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : boldChat ? '#F8F8F8' : '#fff',
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
          <Text style={styles.customblue}>Edit</Text>
          {boldChat && <Text style={styles.boldText}>Chats</Text>}
          <Icon name="edit" size={20} color="#669bfa" />
        </View>
      </View>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={{backgroundColor: '#fff'}}>
        <Text style={{marginLeft: 15, fontSize: 40, fontWeight: '700'}}>
          Chats
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
        <View style={styles.headBottom}>
          <Text style={styles.customblue}>Broadcast Lists</Text>
          <Text style={styles.customblue}>New Group</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#C4C4C4',
            borderBottomWidth: 0.5,
          }}
        />
        <View style={styles.chat}>
          {chats?.map((chat, index) => (
            <TouchableOpacity
              key={chat.id}
              style={styles.individualChat}
              activeOpacity={0.5}
              onPress={() => navigation.push('Chat')}>
              <Image source={chat.image} style={styles.profile} />
              <View style={styles.chatContent}>
                <View style={styles.chatTop}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatTime}>{chat.time}</Text>
                </View>
                <View style={styles.chatBottom}>
                  <Text style={styles.chatText}>{chat.lastMessage}</Text>
                  {!chat.opened && (
                    <View style={styles.chatCount}>
                      <Text style={styles.chatCountText}>
                        {chat.unreadChatCount}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10000000,
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
  chat: {
    padding: 15,
  },
  individualChat: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  chatContent: {
    marginLeft: 15,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 10,
  },
  chatTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  chatBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatName: {
    fontSize: 18,
    fontWeight: '600',
  },
  chatTime: {
    fontSize: 14,
    color: '#669bfa',
  },
  chatText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#888',
  },
  chatCount: {
    backgroundColor: '#669bfa',
    height: 20,
    minWidth: 20,
    paddingHorizontal: 5,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#669bfa',
  },
  chatCountText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    borderTopWidth: 0.5,
    borderTopColor: '#C4C4C4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    // marginHorizontal: 15,
  },
});

export default ChatList;
