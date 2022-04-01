import { defaultSettingsValue, useSettingsContext } from '@src/context/SettingContext';
import { fullScreen } from '@src/navigation/constant';
import { saveAsyncStorage } from '@src/utils/db';
import { COLOR } from '@src/utils/styles';
import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { modalKeys } from '../organism/ColorSettingContent';

const ColorChangeModal = ({
  modalVisible,
  onCloseModal,
  onPressChangeColor,
  modalKey,
}:{
  modalVisible: boolean,
  onCloseModal: () => void,
  onPressChangeColor: (key: modalKeys,changedColor:COLOR) => void,
  modalKey: modalKeys | null,
}) => {
  const {settings:{color}} = useSettingsContext();
  
  const onPress = (changedColor: COLOR) => {
    if(modalKey){
      onPressChangeColor(modalKey, changedColor);
      saveAsyncStorage<typeof defaultSettingsValue>('settings',{
        color:{
          ...color,
          [modalKey]: changedColor,
        }
      })
    }
    onCloseModal();
  }

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={onCloseModal}
      transparent={true}
    >
      <View style={styles.ModalContainer} >
        <View style={styles.RowContainer} >
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.RED_1)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.RED_1}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.RED_2)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.RED_2}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.RED_3)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.RED_3}]} />
            </Pressable>
          </View>
        </View>

        <View style={styles.RowContainer} >
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.GREEN_1)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.GREEN_1}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.GREEN_2)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.GREEN_2}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.GREEN_3)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.GREEN_3}]} />
            </Pressable>
          </View>
        </View>

        <View style={styles.RowContainer} >
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.BLUE_1)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.BLUE_1}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.BLUE_2)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.BLUE_2}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.BLUE_3)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.BLUE_3}]} />
            </Pressable>
          </View>
        </View>

        <View style={styles.RowContainer} >
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.YELLOW_1)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.YELLOW_1}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.YELLOW_2)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.YELLOW_2}]} />
            </Pressable>
          </View>
          <View style={styles.ItemContainer}>
            <Pressable onPress={() => onPress(COLOR.YELLOW_3)} >
              <View style={[styles.BtnStyle, {backgroundColor: COLOR.YELLOW_3}]} />
            </Pressable>
          </View>
        </View>
        
      </View>
    </Modal>
  )
}

export default ColorChangeModal;

const styles =StyleSheet.create({
  ModalContainer: {
    width: fullScreen()[1],
    height: fullScreen()[0],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.MODAL_BACKGROUND,
  },
  RowContainer: {
    flexDirection: 'row',
  },
  ItemContainer: {
    margin: 10,
  },
  BtnStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
  }
})