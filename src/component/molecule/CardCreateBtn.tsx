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
 
  return (
    <View style={styles.Container} >
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
    backgroundColor: 'rgba(255,196,196,1)',
    justifyContent:'center',
    alignItems:'center',
  },
  ContentContainer: {
    justifyContent:'center',
    alignItems:'center',
  }
})