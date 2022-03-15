import { Card } from '@src/type';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import CardEditModal from './CardEditModal';

const CardEditBtn = ({
  card,
}:{
  card:Card,
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
        content="Edit"
        onPress={onOpenModal}
        ContainerStyle={styles.Container}
        ContentStyle={styles.Content}
      />
      <CardEditModal 
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
        card={card}
      />
    </Fragment>
  )
}

export default CardEditBtn;

const styles =StyleSheet.create({
  Container: {
    width: 50,
    height: 30,
  },
  Content:{
    fontSize: 15,
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