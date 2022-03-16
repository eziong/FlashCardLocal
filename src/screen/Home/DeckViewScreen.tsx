import { useRoute } from '@react-navigation/native';
import T_Basic from '@src/component/template/T_Basic';
import React from 'react';
import { View, Text } from 'react-native';

const DeckViewScreen = () => {
  const {params:deck} = useRoute();
  
  console.log(deck)

  return (
    <T_Basic 
      Body={<View><Text>Deck View Screen</Text></View>}
    />
  )
}

export default DeckViewScreen;