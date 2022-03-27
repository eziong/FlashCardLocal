import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SquareBtnIon = ({
  onPress,
  ContainerStyle,
  ContentStyle,
}:{
  onPress?:() => void,
  ContainerStyle?:ViewStyle,
  ContentStyle:{name:string, size:number, color:string},
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={[styles.Container, ContainerStyle]} >
        <Ionicons name={ContentStyle.name} size={ContentStyle.size} color={ContentStyle.color} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SquareBtnIon;

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