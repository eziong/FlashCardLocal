import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { Deck } from '@src/type';
import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const DeckViewBtn = ({
  deck,
}:{
  deck:Deck
}) => {
  const navigation = useTypeStackNavigation();

  const onPress = () => {
    navigation.navigate('DeckViewScreen',{deck});
  }

  return (
    <SquareBtn 
      content='view'
      ContainerStyle={styles.Container}
      ContentStyle={styles.ContentContainer}
      onPress={onPress}
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