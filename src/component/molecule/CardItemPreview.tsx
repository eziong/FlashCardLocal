import CardItemContext from '@src/context/CardItemContext';
import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { Card } from '@src/type';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardEditBtn from './CardEditBtn';
import CardViewBtn from './CardViewBtn';

const CardItemPreview = ({
  cardId,
}:{
  cardId:string,
}) => {
  const [card, isLoading] = useLoadAsyncStorage<Card>(cardId);
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    if(isLoading) return;
    if(card) {
      setQuestion(card.content.question);
      setAnswer(card.content.answer);
    }
  },[isLoading])

  if(!card || isLoading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    )
  }

  return (
    <CardItemContext.Provider
      value={{
        id: card.id,
        question, setQuestion,
        answer, setAnswer,
        deckId: card.deckId,
      }}
    >
      <View style={styles.Container} >
        <Text>{question}</Text>
        <View style={styles.ButtonsContainer}>
          <CardViewBtn />
          <CardEditBtn/>
        </View>
      </View>
    </CardItemContext.Provider>
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