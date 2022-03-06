import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle, TouchableWithoutFeedback } from 'react-native';

const CircleBtn = ({
  content,
  onPress,
  ContainerStyle,
  ContentStyle,
}:{
  content?:string,
  onPress?:() => void,
  ContainerStyle?:ViewStyle,
  ContentStyle?:TextStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={[styles.Container, ContainerStyle]} >
        <Text style={[styles.Content, ContentStyle]} >{content}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CircleBtn;

const styles = StyleSheet.create({
  Container: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    fontSize: 20,
  }
})