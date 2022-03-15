import { AsyncType, Card, Deck } from '@src/type';
import { updateDeck } from '@src/utils/deck';
import React, { useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const DeckEditModal = ({
  modalVisible,
  onCloseModal,
  deck,
  onReload,
}:{
  modalVisible:boolean,
  onCloseModal: () => void,
  deck: Deck,
  onReload: () => void,
}) => {
  const [name, setName] = useState<string>(deck.name);

  const onPressConfirm = () => {
    if(name.length === 0) return;
    updateDeck(deck.id, name)
    .then(() => {
      onReload();
      onCloseModal();
    })
  }

  const onPressCancle = () => {
    setName(deck.name);
    onCloseModal();
  }

  return (
    <Modal
        visible={modalVisible}
        onRequestClose={onCloseModal}
        transparent={true}
      >
        <View style={styles.ModalContainer} >
          <View style={styles.ModalContentContainer} >
            <TextInput placeholder='Name' onChangeText={setName} value={name} />
            <View style={styles.ModalBtnContainer} >
              <SquareBtn 
                content='Confirm' 
                ContainerStyle={styles.BtnContainer}
                onPress={onPressConfirm}
              />
              <SquareBtn 
                content='Cancle' 
                ContainerStyle={styles.BtnContainer}
                onPress={onPressCancle}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default DeckEditModal;

const styles =StyleSheet.create({
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