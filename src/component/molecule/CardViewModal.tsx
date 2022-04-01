import CardItemContext from '@src/context/CardItemContext';
import { fullScreen } from '@src/navigation/constant';
import { COLOR } from '@src/utils/styles';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import CardView from './CardView';

const CardViewModal = ({
  modalVisible,
  onCloseModal,
}:{
  modalVisible:boolean,
  onCloseModal: () => void,
}) => {
  const {id} = useContext(CardItemContext);

  return (
    <Modal
        visible={modalVisible}
        onRequestClose={onCloseModal}
        transparent={true}
      >
      <View style={styles.ModalContainer} >
        <CardView cardId={id} />
      </View>
    </Modal>
  )
}

export default CardViewModal;

const styles =StyleSheet.create({
  ModalContainer: {
    width: fullScreen()[1],
    height: fullScreen()[0],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.MODAL_BACKGROUND,
  },
})