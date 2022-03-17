import DeckItemContext from '@src/context/DeckItemContext';
import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { Deck } from '@src/type';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckEditBtn from './DeckEditBtn';
import DeckSelectBtn from './DeckSelectBtn';
import DeckViewBtn from './DeckViewBtn';

const DeckItemPreview = ({
  deckId,
  readOnly,
}:{
  deckId:string,
  readOnly?:boolean,
}) => {
  const [deck, isLoading] = useLoadAsyncStorage<Deck>(deckId);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if(isLoading || !deck) return;
    setName(deck.name);
    setDescription(deck.description);
  },[isLoading])

  if(isLoading || !deck){
    return(<EmptyDeckItemPreview />)
  }
  return (
    <DeckItemContext.Provider
      value={{id:deck.id, name, setName, description, setDescription}}
    >
      <View style={styles.Container} >
        <Text>{name}</Text>
        {readOnly
        ? (
          <View style={styles.ButtonsContainer} >
            <DeckViewBtn deck={deck} />
            <DeckSelectBtn deckId={deck.id} />
          </View>
        )
        : (
          <View style={styles.ButtonsContainer} >
            <DeckEditBtn />
          </View>
        )
        }
      </View>
    </DeckItemContext.Provider>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth:1,
  },
  ButtonsContainer: {
    width:110,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})