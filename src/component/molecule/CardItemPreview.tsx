import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { Card } from '@src/type';
import { loadAsyncStorage } from '@src/utils/db';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardEditBtn from './CardEditBtn';

const CardItemPreview = ({
  cardId,
}:{
  cardId:string,
}) => {
  const [card, isLoading] = useLoadAsyncStorage(cardId);

  if(isLoading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.Container} >
      <Text>{card.question}</Text>
      <View style={styles.ButtonsContainer}>
        <Text>view</Text>
        <CardEditBtn card={card}/>
      </View>
    </View>
  )
}

export default CardItemPreview;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderWidth:1,
  },
  ButtonsContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})