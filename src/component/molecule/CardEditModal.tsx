import { AsyncType, Card } from '@src/type';
import React, { useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const CardEditModal = ({
  modalVisible,
  onCloseModal,
  card,
}:{
  modalVisible:boolean,
  onCloseModal: () => void,
  card: Card,
}) => {
  const [question, setQuestion] = useState<string>(card.content.question);
  const [answer, setAnswer] = useState<string>(card.content.answer);

  const onPressConfirm = () => {
    if(question.length === 0 || answer.length === 0) return;
    // onEditCard({question, answer, id:generateDBTableName(AsyncType.CARD)});
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
        <View style={styles.ModalContainer} >
          <View style={styles.ModalContentContainer} >
            <TextInput placeholder='Question' onChangeText={setQuestion} value={question} />
            <TextInput placeholder='Answer' onChangeText={setAnswer} value={answer} />
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

export default CardEditModal;

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