import { getEveryCardIdsInDeck } from '@src/utils/deck';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import AddCardModal from './AddCardModal';

const AddCardBtn = ({
  deckId,
  setCardIds,
}:{
  deckId:string,
  setCardIds: React.Dispatch<React.SetStateAction<string[]>>,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onOpenModal = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
  }

  const onAddCardIdInArray = (cardId:string) => {
    setCardIds(prev => [...prev, cardId])
  }

  return(
    <Fragment>
      <SquareBtn 
        content="Add Card"
        onPress={onOpenModal}
        ContainerStyle={styles.Container}
      />
      <AddCardModal
        deckId={deckId}
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
        onAddCardIdInArray={onAddCardIdInArray}
      />
    </Fragment>
  )
}

export default AddCardBtn;

const styles =StyleSheet.create({
  Container: {
    width: "100%",
    height: 50
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.5)'
  },
  ModalContentContainer: {
    width: 300,
    height: 200,
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