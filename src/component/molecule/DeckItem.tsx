import { Deck } from '@src/type';
import { loadAsyncStorage } from '@src/utils';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeckItem = ({deckId, readOnly}:{deckId:string, readOnly?:boolean}) => {
  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    loadAsyncStorage(deckId).then(([success,data]) => {
      if(success) setDeck(data)
    })
  },[])
  
  if(deck){
    return (
      <View style={styles.Container} >
        <Text>{deck.name}</Text>
        <Text>view</Text>
        {readOnly 
        ? (<Text>select</Text>)
        : (<Text>Edit</Text>)}
      </View>
    )
  }
  return (<EmptyDeckItem />)
}

export default DeckItem;

const EmptyDeckItem = () => {
  return (
    <View style={styles.Container} >
      <Text>Empty Deck Item</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    width: "100%",
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center'
  }
})