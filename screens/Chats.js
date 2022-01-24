import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from '../components/screens/chats/ChatList';
import Chat from '../components/screens/chats/Chat';

const Chats = ({}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default Chats;
