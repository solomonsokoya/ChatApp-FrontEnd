import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {createBottomTabNavigator} from 'react-navigation';
import Chatroom from './Chat';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Friends from './Friends';

export default class AppTabNavigator extends Component{
  static navigationOptions = ({navigation}) =>{
    return{
      headerLeft:(
        <View style = {{padding:10}}>
        <MaterialIcons name='menu' size= {22} onPress = {() => navigation.navigate('DrawerOpen')}
        />
        </View>
        )
    }
  }
  render(){
    return(
      <HomeScreenTabNavigator screenProps= {{navigation: this.props.navigation }}/>
      )
  }

}

const HomeScreenTabNavigator = createBottomTabNavigator({
  Friends:{
    screen: Friends,
    navigationOptions: {
      tabBarLabel: 'Friends'
    }
  },
  Chatroom:{
    screen: Chatroom,
    navigationOptions: {
      tabBarLabel: 'Chatroom'
    }
  }
})
