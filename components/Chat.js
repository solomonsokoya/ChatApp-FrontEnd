import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'
window.navigator.userAgent = 'react-native'
import io from 'socket.io-client/dist/socket.io';

class Chat extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Solo',
      messages: []
    }


    this.socket = io('exp://173.2.2.192:19000', {jsonp: false});
    this.socket.on('update', () => {
      console.log('inside on')
      return this.setState({ messages: [{__id: 1, text: 'I work'}] });
    }
      )}


    onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render(){
    return(
      <GiftedChat
        messages={this.state.messages}
        onSend = {messages => this.onSend(messages)}
      />
      )
  }
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
