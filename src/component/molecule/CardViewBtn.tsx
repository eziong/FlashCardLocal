import { Card } from '@src/type';
import { COLOR } from '@src/utils/styles';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';
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
      <SquareBtnFeather 
        onPress={onOpenModal}
        ContainerStyle={styles.Container}
        ContentStyle={{name:'eye', size: 25, color: 'black'}}
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
    backgroundColor: COLOR.MODAL_BACKGROUND,
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