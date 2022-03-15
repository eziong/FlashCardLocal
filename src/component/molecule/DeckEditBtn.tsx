import { Deck } from '@src/type';
import React, { Fragment, useState } from 'react';
import { StyleSheet } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import DeckEditModal from './DeckEditModal';

const DeckEditBtn = ({
  deck,
  onReload,
}:{
  deck:Deck,
  onReload: () => void
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onCloseModal = () => {
    setModalVisible(false);
  }

  const onOpenModal = () => {
    setModalVisible(true);
  }

  return (
    <Fragment>
      <SquareBtn 
        content='edit'
        ContainerStyle={styles.Container}
        ContentStyle={styles.ContentContainer}
        onPress={onOpenModal}
      />
      <DeckEditModal 
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
        deck={deck}
        onReload={onReload}
      />
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
  }
})