import { RouteProp, useRoute } from '@react-navigation/native';
import DeckItemContext from '@src/context/DeckItemContext';
import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import { AsyncType, Card, Deck, ParamLimit, TabBarFirstScreen } from '@src/type';
import { getEveryCardIdsInDeck, updateDeck } from '@src/utils/deck';
import React, { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import { Modal, View, TextInput, StyleSheet, FlatList } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import AddCardBtn from '../molecule/AddCardBtn';
import CardItemPreview from '../molecule/CardItemPreview';

const DeckEditContent = ({
  onCloseModal,
}:{
  onCloseModal: () => void
}) => {
  const {id, name, setName} = useContext(DeckItemContext);
  const [localName, setLocalName] = useState<string>(name);
  const [cardIds, setCardIds] = useState<string[]>([]);

  useEffect(() => {
    getEveryCardIdsInDeck(id)
    .then((cardIdArray) => setCardIds(cardIdArray));
  },[id])

  const onPressConfirm = () => {
    if(name.length === 0) return;
    updateDeck(id, localName)
    .then(() => {
      setName(localName);
      onCloseModal();
    })
  }
  
  return (
    <View style={styles.Container} >
      <TextInput placeholder='Name' onChangeText={setLocalName} value={localName} />
      <FlatList
        data={cardIds ? cardIds : []}
        renderItem={({item, index}) => (
          <Fragment key={index}>
            <CardItemPreview 
              cardId={item}
            />
          </Fragment>
        )}
      />
      <AddCardBtn deckId={id} setCardIds={setCardIds} />
      <View style={styles.ModalBtnContainer} >
        <SquareBtn 
          content='Confirm' 
          ContainerStyle={styles.BtnContainer}
          onPress={onPressConfirm}
        />
      </View>
    </View>
  )
}

export default DeckEditContent;

const styles =StyleSheet.create({
  Container: {
    width: 300,
    height: fullScreen()[0]-100,
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