import { AsyncType, Card } from '@src/type';
import { generateDBTableName } from '@src/utils';
import React, { Fragment, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SquareBtn from '../atom/SquareBtn';

const AddCardBtn = ({
  onCreateNewCard
}:{
  onCreateNewCard:(card:Card) => void,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const onOpenModal = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
  }

  const onPressConfirm = () => {
    onCreateNewCard({question, answer, id:generateDBTableName(AsyncType.CARD)});
    setQuestion('');
    setAnswer('');
    setModalVisible(false);
  }

  const onPressCancle = () => {
    setQuestion('');
    setAnswer('');
    setModalVisible(false);
  }

  return(
    <Fragment>
      <SquareBtn 
        content="Add Card"
        onPress={onOpenModal}
        ContainerStyle={styles.Container}
      />
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
    </Fragment>
  )
}

export default AddCardBtn;

const styles =StyleSheet.create({
  Container: {
    width: "100%",
    height: 50
  },
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