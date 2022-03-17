import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const DeckSelectBtn = ({
  deckId,
}:{
  deckId:string
}) => {
  const navigation = useTypeStackNavigation();

  const onPress = () => {
    navigation.navigate('LearningScreen',{deckId})
  }

  return (
    <SquareBtn 
      content='select'
      ContainerStyle={styles.Container}
      ContentStyle={styles.ContentContainer}
      onPress={onPress}
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