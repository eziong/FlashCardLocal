import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const DeckViewBtn = () => {
  return (
    <SquareBtn 
      content='view'
      ContainerStyle={styles.Container}
      ContentStyle={styles.ContentContainer}
    />
  )
}

export default DeckViewBtn;

const styles = StyleSheet.create({
  Container: {
    width: 50,
    height: 25,
  },
  ContentContainer: {
    fontSize : 15
  }
})