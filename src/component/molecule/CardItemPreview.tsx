import CardItemContext from '@src/context/CardItemContext';
import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { fullScreen } from '@src/navigation/constant';
import { Card } from '@src/type';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardEditBtn from './CardEditBtn';
import CardViewBtn from './CardViewBtn';

const CardItemPreview = ({
  cardId,
  index,
}:{
  cardId:string,
  index:number,
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
      <View style={
        index%2 === 0
        ? ([styles.Container, {backgroundColor:'rgba(255,255,196,0.4)'}])
        : ([styles.Container, {backgroundColor:'rgba(196,255,196,0.4)'}])
      } >
        <ScrollView style={styles.TextContainer} >
          <Text  style={styles.TextStyle}>{question}</Text>
        </ScrollView>
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
    borderRadius:5,
    width: fullScreen(0.9)[1],
    height: 50,
    paddingHorizontal: 20,
  },
  ButtonsContainer: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 18,
    color: 'rgba(72,72,72,1)',
  },
  TextContainer: {
    maxWidth: fullScreen(0.5)[1],
    height: 30,
    overflow: 'scroll',
  }
})