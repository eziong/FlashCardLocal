import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import React from 'react';
import { StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const CreateDeckBtn = () => {
  const navigation = useTypeStackNavigation();
  
  const onPress = () => {
    navigation.navigate('DeckCreateScreen');
  }

  return (
      <SquareBtn 
        content='Create Deck'
        onPress={onPress}
        ContainerStyle={styles.Container}
      />
  )
}

export default CreateDeckBtn;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 50
  }
})