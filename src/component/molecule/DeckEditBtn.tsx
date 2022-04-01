import DeckItemContext from '@src/context/DeckItemContext';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import { COLOR } from '@src/utils/styles';
import React, { Fragment, useContext, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import SquareBtnFeather from '../atom/SquareBtnFeather';

const DeckEditBtn = () => {
  const {id, name, description} = useContext(DeckItemContext);

  const navigation = useTypeStackNavigation();

  const onPress = () => {
    navigation.navigate('DeckEditScreen',{id, name, description});
  }

  return (
    <Fragment>
      <SquareBtnFeather 
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
    backgroundColor: COLOR.MODAL_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  }
})