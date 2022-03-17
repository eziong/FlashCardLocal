import DeckItemContext from '@src/context/DeckItemContext';
import { fullScreen } from '@src/navigation/constant';
import { getEveryCardIdsInDeck, updateDeck } from '@src/utils/deck';
import React, { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import { Modal, View, TextInput, StyleSheet, FlatList } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import AddCardBtn from '../molecule/AddCardBtn';
import CardItemPreview from '../molecule/CardItemPreview';
import DeckInputBox from '../molecule/DeckInputBox';

const DeckEditContent = ({
  onCloseModal,
}:{
  onCloseModal: () => void
}) => {
  const {id, name, setName, description, setDescription} = useContext(DeckItemContext);
  const [localName, setLocalName] = useState<string>(name);
  const [localDescription, setLocalDescription] = useState<string>(description)
  const [cardIds, setCardIds] = useState<string[]>([]);

  useEffect(() => {
    getEveryCardIdsInDeck(id)
    .then((cardIdArray) => setCardIds(cardIdArray));
  },[id])

  const onPressConfirm = () => {
    if(name.length === 0) return;
    updateDeck(id, localName, localDescription)
    .then(() => {
      setName(localName);
      setDescription(localDescription);
      onCloseModal();
    })
  }
  
  return (
    <View style={styles.Container} >
      <DeckInputBox 
        deckName={localName}
        setDeckName={setLocalName}
        deckDescription={localDescription}
        setDeckDescription={setLocalDescription}
      />
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