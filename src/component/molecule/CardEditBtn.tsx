import { Card } from '@src/type';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';
import CardEditModal from './CardEditModal';

const CardEditBtn = () => {
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
        ContentStyle={{name:'edit', size: 25, color: 'black'}}
      />
      <CardEditModal 
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
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
})