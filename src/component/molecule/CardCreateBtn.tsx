import { useSettingsContext } from '@src/context/SettingContext';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CardCreateBtn = ({
  size,
  color,
  onOpenModal,
}:{
  size: number,
  color: string,
  onOpenModal: () => void,
}) => {
  const  {settings:{color:{FloatingAddBtn}}} = useSettingsContext();
  return (
    <View style={[styles.Container, {backgroundColor:FloatingAddBtn}]} >
      <Pressable onPress={onOpenModal} >
        <View style={styles.ContentContainer} >
          <FeatherIcon name='plus' size={size} color={color} />
        </View>
      </Pressable>
    </View>
  )
}

export default CardCreateBtn;

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: 50,
    height: 50,
    left:30,
    bottom: 170,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
  },
  ContentContainer: {
    justifyContent:'center',
    alignItems:'center',
  }
})