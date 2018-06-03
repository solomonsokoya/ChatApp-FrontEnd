import React, { Component } from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from "react-native";

import SignIn from "./components/SignIn";
import TabNav from "./components/TabNav"
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
    TabNav:{
      screen: TabNav,
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





