import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import React from 'react';
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
      />
  )
}

export default CreateDeckBtn;