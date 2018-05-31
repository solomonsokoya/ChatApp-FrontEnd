import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

class Friends extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {styles.container}>
        <Text> Friends Page </Text>
        </View>
      )
  }
}

export default Friends

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
