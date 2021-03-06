import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { Deck } from '@src/type';
import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';

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
    <SquareBtnFeather 
      ContainerStyle={styles.Container}
      ContentStyle={{name:'eye', size: 30, color: 'black'}}
      onPress={onPress}
    />
  )
}

export default DeckViewBtn;

const styles = StyleSheet.create({
  Container: {
    width: 50,
    height: 40,
  },
  ContentContainer: {
    fontSize : 15
  }
})