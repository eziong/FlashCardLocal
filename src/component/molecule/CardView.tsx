import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { fullScreen } from '@src/navigation/constant';
import { Card } from '@src/type';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardView = ({
  cardId
}:{
  cardId:string
}) => {
  const [card, isLoading] = useLoadAsyncStorage<Card>(cardId);

  if(isLoading || !card){
    return (
      <View>
        <Text>isLoading</Text>
      </View>
    )
  }
  return (
    <View style={styles.Container} >
      <Text>{card.content.question}</Text>
      <Text>{card.content.answer}</Text>
    </View>
  )
}

export default CardView;

const styles = StyleSheet.create({
  Container: {
    height:fullScreen()[0] * 0.8,
    width: fullScreen()[1] * 0.8,
    backgroundColor: 'green',
  }
})