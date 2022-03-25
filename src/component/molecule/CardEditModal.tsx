import CardItemContext from '@src/context/CardItemContext';
import { AsyncType, Card } from '@src/type';
import { updateCard } from '@src/utils/deck';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const CardEditModal = ({
  modalVisible,
  onCloseModal,
}:{
  modalVisible:boolean,
  onCloseModal: () => void,
}) => {
  const {question, setQuestion, answer, setAnswer, deckId, id} = useContext(CardItemContext);
  const [localQuestion, setLocalQuestion] = useState<string>(question);
  const [localAnswer, setLocalAnswer] = useState<string>(answer);

  useEffect(() => {
    setLocalQuestion(question);
    setLocalAnswer(answer);
  },[question, answer])

  const onPressConfirm = () => {
    if(question.length === 0 || answer.length === 0) return;
    updateCard(deckId, id, {question:localQuestion, answer:localAnswer})
    setQuestion(localQuestion);
    setAnswer(localAnswer);
    onCloseModal();
  }

  const onPressCancle = () => {
    setLocalQuestion(question);
    setLocalAnswer(answer);
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
            <TextInput placeholder='Question' onChangeText={setLocalQuestion} value={localQuestion} />
            <TextInput placeholder='Answer' onChangeText={setLocalAnswer} value={localAnswer} />
            <View style={styles.ModalBtnContainer} >
              <SquareBtn 
                ContentStyle={{name:'check', size: 30, color: 'black'}}
                ContainerStyle={styles.BtnContainer}
                onPress={onPressConfirm}
              />
              <SquareBtn 
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