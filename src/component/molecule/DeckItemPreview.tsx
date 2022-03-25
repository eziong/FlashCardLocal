import DeckItemContext from '@src/context/DeckItemContext';
import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { fullScreen } from '@src/navigation/constant';
import { Deck } from '@src/type';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DeckDeleteBtn from './DeckDeleteBtn';
import DeckEditBtn from './DeckEditBtn';
import DeckSelectBtn from './DeckSelectBtn';
import DeckViewBtn from './DeckViewBtn';

const DeckItemPreview = ({
  deckId,
  readOnly,
  setDeckIds,
}:{
  deckId:string,
  readOnly?:boolean,
  setDeckIds: React.Dispatch<React.SetStateAction<string[]>>
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
      value={{id:deck.id, name, setName, description, setDescription, setDeckIds}}
    >
      <View style={styles.Container} >
        <ScrollView style={styles.TextContainer} >
          <Text style={styles.TextStyle} >{name}</Text>
        </ScrollView>
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
            <DeckDeleteBtn />
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
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ButtonsContainer: {
    width:120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 18,
    color: 'rgba(72,72,72,1)',
  },
  TextContainer: {
    maxWidth: fullScreen(0.5)[1],
    maxHeight: 30,
    overflow: 'scroll',
  }
})