import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle, TouchableWithoutFeedback } from 'react-native';

const SquareBtn = ({
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

export default SquareBtn;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    fontSize: 20,
  }
})