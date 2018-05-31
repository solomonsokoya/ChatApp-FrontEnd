import React, {Component} from "react";

import {View, Text, StyleSheet} from 'react-native';
import{ createDrawerNavigator, createStackNavigator} from 'react-navigation';
import UserPage from './UserPage'
import HomeScreenTabNavigator from './HomeScreenTabNav'

const InnerStackNavigator = createStackNavigator({
   tabNavigator: { screen: HomeScreenTabNavigator}
})

const AppDrawerNavigator = createDrawerNavigator({
    UserPage: { screen: InnerStackNavigator }
})


export default AppDrawerNavigator;
