import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import { Deck } from '@src/type';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import DeckEditContent from '../organism/DeckEditContent';

const DeckEditBtn = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onOpenModal = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <Fragment>
      <SquareBtn 
        content='edit'
        ContainerStyle={styles.Container}
        ContentStyle={styles.ContentContainer}
        onPress={onOpenModal}
      />
      <Modal
        transparent={true}
        onRequestClose={onCloseModal}
        visible={modalVisible}
      >
        <View style={styles.ModalContainer} >
          <DeckEditContent 
            onCloseModal={onCloseModal}
          />
        </View>
      </Modal>
    </Fragment>
  )
}

export default DeckEditBtn;

const styles = StyleSheet.create({
  Container: {
    width: 50,
    height: 25,
  },
  ContentContainer: {
    fontSize : 15
  },
  ModalContainer: {
    height: fullScreen()[0],
    width: fullScreen()[1],
    backgroundColor: 'rgba(80,80,80,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
})