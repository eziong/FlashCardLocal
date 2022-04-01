import React, { useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';
import { createCard } from '@src/utils/deck';
import { useSettingsContext } from '@src/context/SettingContext';

const AddCardModal = ({
  deckId,
  modalVisible,
  onCloseModal,
  onAddCardIdInArray,
}:{
  deckId:string,
  modalVisible:boolean,
  onCloseModal: () => void,
  onAddCardIdInArray: (cardId:string) => void,
}) => {
  const {settings:{color}} = useSettingsContext();
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const onPressConfirm = () => {
    if(question.length === 0 || answer.length === 0) return;
    createCard(deckId,{question,answer})
    .then(cardId => onAddCardIdInArray(cardId))
    setQuestion('');
    setAnswer('');
    onCloseModal();
  }

  const onPressCancle = () => {
    setQuestion('');
    setAnswer('');
    onCloseModal();
  }

  return (
    <Modal
        visible={modalVisible}
        onRequestClose={onCloseModal}
        transparent={true}
      >
        <View style={[styles.ModalContainer, {backgroundColor:color.ModalBackground}]} >
          <View style={styles.ModalContentContainer} >
            <TextInput placeholder='Question' onChangeText={setQuestion} value={question} />
            <TextInput placeholder='Answer' onChangeText={setAnswer} value={answer} />
            <View style={styles.ModalBtnContainer} >
              <SquareBtnFeather 
                ContentStyle={{name:'check', size: 30, color: 'black'}}
                ContainerStyle={styles.BtnContainer}
                onPress={onPressConfirm}
              />
              <SquareBtnFeather 
                ContentStyle={{name:'x', size: 30, color: 'black'}}
                ContainerStyle={styles.BtnContainer}
                onPress={onPressCancle}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default AddCardModal;

const styles =StyleSheet.create({
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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