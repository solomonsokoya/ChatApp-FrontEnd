import React, {Component} from "react";

import {View, Text, StyleSheet} from 'react-native';
import{ createBottomTabNavigator} from 'react-navigation';
import UserPage from './UserPage';
import Friends from './Friends';
import Chat from './Chat';

const SignedIn = createBottomTabNavigator({
  UserPage: {
    screen: UserPage,
    navigationOptions: {
      tabBarLabel: "UserPage"
    }
  },
  Friends: {
    screen: Friends,
    navigationOptions: {
      tabBarLabel: "Friends"
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      tabBarLabel: "Chat"
    }
  }

});


export default SignedIn;
