import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderText = ({
  text
}:{
  text:string
}) => {
  return (
    <View style={styles.Container} >
      <Text style={styles.TextContainer} >{text}</Text>
    </View>
  )
}

export default HeaderText;

const styles = StyleSheet.create({
  Container: {
    margin: 10,
  },
  TextContainer: {
    color: 'black',
    fontSize:25,
    fontWeight:'bold'
  }
})