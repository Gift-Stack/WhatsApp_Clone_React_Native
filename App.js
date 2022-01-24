/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chats from './screens/Chats';
import Statuses from './screens/Statuses';
import Footer from './components/footer';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <Footer {...props} />}>
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Status"
          component={Statuses}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
