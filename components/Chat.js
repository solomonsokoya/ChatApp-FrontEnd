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
    this.socket = io('https://solomonschatappserver.herokuapp.com/', {jsonp: false});
  }

  componentDidMount(){
    this.socket.on('chat message', (msg) => {
      this.setState(prevState => ({
      messages: GiftedChat.append(prevState.messages, msg),
       }))
    });

  }

    onSend(messages) {
      console.log(messages[0])
      this.socket.emit('chat message', messages)
        this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render(){
    console.log(this.props)

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
