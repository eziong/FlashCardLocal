import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CircleBtn = ({
  onPress,
  ContainerStyle,
  ContentStyle,
}:{
  onPress?:() => void,
  ContainerStyle?:ViewStyle,
  ContentStyle?:{name:string, size:number, color:string},
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={[styles.Container, ContainerStyle]} >
        {
          ContentStyle
          ? (
            <MaterialCommunityIcon name={ContentStyle.name} size={ContentStyle.size} color={ContentStyle.color} />
          )
          : (
             null 
          )
        }  
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
    borderWidth: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10,
  },
  Content: {
    fontSize: 20,
  }
})