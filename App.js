import React, { Component } from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from "react-native";

import SignIn from "./components/SignIn";
import UserPage from "./components/UserPage"
import DrawerNavigator from "./components/DrawNav"
import {createStackNavigator} from "react-navigation";
import * as firebase from 'firebase';

export default class extends Component{
  render(){
    return(
      <Navigation/>
      )
  }

}

 const Navigation = createStackNavigator(
  {
    SignIn: {screen: SignIn},
    DrawerNavigator:{
      screen: DrawerNavigator,
      navigationOptions:{
        header: null
      }
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
 );





