import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckEditBtn from './DeckEditBtn';
import DeckSelectBtn from './DeckSelectBtn';
import DeckViewBtn from './DeckViewBtn';

const DeckItemPreview = ({
  deckId,
  readOnly,
  onReload,
}:{
  deckId:string,
  readOnly?:boolean,
  onReload: () => void,
}) => {
  const [deck, isLoading] = useLoadAsyncStorage(deckId);
  

  if(isLoading){
    return(<EmptyDeckItemPreview />)
  }
  return (
    <View style={styles.Container} >
      <Text>{deck.name}</Text>
      <View style={styles.ButtonsContainer} >
        <DeckViewBtn deck={deck} />
        {readOnly 
        ? (<DeckSelectBtn deck={deck} />)
        : (<DeckEditBtn deck={deck} onReload={onReload} />)}
      </View>
    </View>
  )
}

export default DeckItemPreview;

const EmptyDeckItemPreview = () => {
  return (
    <View style={styles.Container} >
      <Text>Empty Deck Item</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flexDirection: 'row',
    width: "100%",
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  ButtonsContainer: {
    width:110,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})