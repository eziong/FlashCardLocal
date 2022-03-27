import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';

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
    <SquareBtnFeather 
      ContainerStyle={styles.Container}
      ContentStyle={{name:'check', size: 30, color: 'black'}}
      onPress={onPress}
    />
  )
}

export default DeckSelectBtn;

const styles = StyleSheet.create({
  Container: {
    width: 50,
    height: 40,
  },
  ContentContainer: {
    fontSize : 15
  }
})