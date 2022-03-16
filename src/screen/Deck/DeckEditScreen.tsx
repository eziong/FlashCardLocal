import { useRoute } from '@react-navigation/native';
import DeckEditContent from '@src/component/organism/DeckEditContent';
import T_Basic from '@src/component/template/T_Basic';
import React from 'react';
import { View, Text } from 'react-native';

const DeckEditScreen = () => {
  const {params:deck} = useRoute();
  
  console.log(deck)

  return (
    <T_Basic 
      Body={<DeckEditContent />}
    />
  )
}

export default DeckEditScreen;