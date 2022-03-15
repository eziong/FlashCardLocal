import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const DeckSelectBtn = () => {
  return (
    <SquareBtn 
      content='select'
      ContainerStyle={styles.Container}
      ContentStyle={styles.ContentContainer}
    />
  )
}

export default DeckSelectBtn;

const styles = StyleSheet.create({
  Container: {
    width: 50,
    height: 25,
  },
  ContentContainer: {
    fontSize : 15
  }
})