import { fullScreen } from '@src/navigation/constant';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const T_DeckCreate = ({
  content
}:{
  content:JSX.Element
}) => (
  <View style={styles.Container} >
    {content}
  </View>
)

export default T_DeckCreate;

const styles = StyleSheet.create({
  Container: {
    width: fullScreen()[1],
    height: fullScreen()[0],
    padding: 50,
  },
})