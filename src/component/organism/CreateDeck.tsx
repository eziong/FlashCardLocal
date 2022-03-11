import React from 'react';
import { Modal, StyleSheet, TextInput, View } from 'react-native';
import T_Basic from '../template/T_Basic';

const CreateDeck = ({
  modalVisible,
  closeModal,
}:{
  modalVisible: boolean,
  closeModal: () => void
}) => {
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={closeModal}
      transparent={true}
    >
      <T_Basic 
        Body={(
          <View style={styles.ContentContainer} >
            <TextInput placeholder='Deck Name' />
          </View>
        )}
      />
    </Modal>
  )
}

export default CreateDeck;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentContainer: {
    width: 250,
    height: 150,
    backgroundColor: 'yellow',
  }
})