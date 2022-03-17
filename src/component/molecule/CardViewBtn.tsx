import { Card } from '@src/type';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import CardEditModal from './CardEditModal';
import CardViewModal from './CardViewModal';

const CardViewBtn = () => {
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
        content="View"
        onPress={onOpenModal}
        ContainerStyle={styles.Container}
        ContentStyle={styles.Content}
      />
      <CardViewModal 
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
      />
    </Fragment>
  )
}

export default CardViewBtn;

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