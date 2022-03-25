import DeckItemContext from '@src/context/DeckItemContext';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import React, { Fragment, useContext, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';

const DeckEditBtn = () => {
  const {id, name, description} = useContext(DeckItemContext);

  const navigation = useTypeStackNavigation();

  const onPress = () => {
    navigation.navigate('DeckEditScreen',{id, name, description});
  }

  return (
    <Fragment>
      <SquareBtn 
        ContainerStyle={styles.Container}
        ContentStyle={{name:'edit', size: 30, color: 'black'}}
        onPress={onPress}
      />
    </Fragment>
  )
}

export default DeckEditBtn;

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