import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import newDeckState, { deckAtomGenerator } from '@src/store/state/newDeckState';
import { AsyncType, Card } from '@src/type';
import { addDBTableIndexKeys, saveAsyncStorage } from '@src/utils';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import SquareBtn from '../atom/SquareBtn';
import AddCardBtn from '../molecule/AddCardBtn';

const DeckCreateFooter = () => {
  const [newDeck, setNewDeck] = useRecoilState(newDeckState);
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigation = useTypeStackNavigation();
  
  const onCreateNewCard = (card:Card) => {
    if(disabled) return;
    setNewDeck((prev) => ({...prev, cards:[...prev.cards, card]}))
  }

  const onPressSave = () => {
    if(disabled) return;
    if(newDeck.name.length > 0){
      setDisabled(true);
      saveAsyncStorage(newDeck.id, newDeck)
      .then(async (success) => {
        if(success){
          setNewDeck(deckAtomGenerator());
          await addDBTableIndexKeys(AsyncType.DECK, newDeck.id);
          navigation.pop();
        }else{
          setDisabled(false);
          console.log('save failed')
        }
      })
    }
  }

  const onPressCancle = () => {
    if(disabled) return;
    navigation.pop();
  }

  return (
    <View style={styles.Container} >
      <AddCardBtn onCreateNewCard={onCreateNewCard} />
      <View style={styles.DoubleBtnContainer} >
        <SquareBtn 
          content='Save' 
          ContainerStyle={styles.BtnContainer}
          onPress={onPressSave}
        />
        <SquareBtn 
          content='Cancle' 
          ContainerStyle={styles.BtnContainer}
          onPress={onPressCancle}
        />
      </View>
    </View>
  )
}

export default DeckCreateFooter;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column'
  },
  DoubleBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 25,
  },
  BtnContainer: {
    width: 85,
    height: 50
  }
})