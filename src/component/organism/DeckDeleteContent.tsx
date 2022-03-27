import DeckItemContext from '@src/context/DeckItemContext';
import { deleteAsyncStorage } from '@src/utils/db';
import { getEveryCardIdsInDeck,  } from '@src/utils/deck';
import React, { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import {  View,  StyleSheet,  Text } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';

const DeckDeleteContent = ({
  onCloseModal,
}:{
  onCloseModal: () => void,
}) => {
  const {id, setDeckIds} = useContext(DeckItemContext);
  const [cardIds, setCardIds] = useState<string[]>([]);

  useEffect(() => {
    getEveryCardIdsInDeck(id)
    .then((cardIdArray) => setCardIds(cardIdArray));
  },[])

  const onPressConfirm = () => {
    deleteAsyncStorage(id)
    .then((success) => {
      if(success){
        const deleteCards = cardIds.map(async(cardId) => await deleteAsyncStorage(cardId));
        Promise.all(deleteCards)
        .then(() => onCloseModal())
        .then(() => setDeckIds(prev => prev.filter(deckId => deckId !== id)))
      }
    })
  }

  const onPressCancle = () => {
    onCloseModal();
  }
  
  return (
    <View style={styles.Container} >
      <Text>Are you sure delete your deck?</Text>
      <View style={styles.ModalBtnContainer} >
        <SquareBtnFeather 
          ContentStyle={{name:'check', size: 30, color: 'black'}}
          ContainerStyle={styles.BtnContainer}
          onPress={onPressConfirm}
        />
        <SquareBtnFeather 
          ContentStyle={{name:'x', size: 30, color: 'black'}}
          ContainerStyle={styles.BtnContainer}
          onPress={onPressCancle}
        />
      </View>
    </View>
  )
}

export default DeckDeleteContent;

const styles =StyleSheet.create({
  Container: {
    width: 300,
    height: 150,
    backgroundColor: 'white'
  },
  ModalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  BtnContainer: {
    width: 100,
    height: 50,
  }
})