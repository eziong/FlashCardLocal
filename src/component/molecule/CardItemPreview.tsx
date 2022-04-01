import CardItemContext from '@src/context/CardItemContext';
import { useSettingsContext } from '@src/context/SettingContext';
import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { fullScreen } from '@src/navigation/constant';
import { Card } from '@src/type';
import { COLOR } from '@src/utils/styles';
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
  const {settings:{color:{OddLine, EvenLine}}} = useSettingsContext();
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
        ? ([styles.Container, {backgroundColor:EvenLine}])
        : ([styles.Container, {backgroundColor:OddLine}])
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
    color: COLOR.TEXT_1,
  },
  TextContainer: {
    maxWidth: fullScreen(0.5)[1],
    height: 30,
    overflow: 'scroll',
  }
})