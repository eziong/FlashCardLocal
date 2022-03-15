import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import AddCardModal from './AddCardModal';

const AddCardBtn = ({
  deckId,
}:{
  deckId:string
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onOpenModal = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
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