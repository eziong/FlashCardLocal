import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import { Deck } from '@src/type';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import DeckDeleteContent from '../organism/DeckDeleteContent';

const DeckDeleteBtn = () => {
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
        ContainerStyle={styles.Container}
        ContentStyle={{name:'trash', size: 30, color: 'black'}}
        onPress={onOpenModal}
      />
      <Modal
        transparent={true}
        onRequestClose={onCloseModal}
        visible={modalVisible}
      >
        <View style={styles.ModalContainer} >
          <DeckDeleteContent 
            onCloseModal={onCloseModal}
          />
        </View>
      </Modal>
    </Fragment>
  )
}

export default DeckDeleteBtn;

const styles = StyleSheet.create({
  Container: {
    width: 50,
    height: 40,
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