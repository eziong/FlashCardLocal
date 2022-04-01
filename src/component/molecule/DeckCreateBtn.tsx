import { useIsFocused } from '@react-navigation/native';
import { useSettingsContext } from '@src/context/SettingContext';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const DeckCreateBtn = ({
  size,
  color,
}:{
  size: number,
  color: string,
}) => {
  const {settings:{color:{FloatingAddBtn}}} = useSettingsContext();
  const isFocused = useIsFocused();
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const animRef = useRef(new Animated.Value(0)).current;

  const navigation = useTypeStackNavigation();

  const onPressExtend = () => {
    setIsExtended(prev => !prev);
  }

  const onPressCreateDeck = () => {
    navigation.navigate('DeckCreateScreen');
  }

  useEffect(() => {
    setIsExtended(false);
  },[isFocused])

  useEffect(() => {
    if(isExtended){
      Animated.timing(animRef,{
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }else{
      Animated.timing(animRef,{
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  },[isExtended])

  const positionInterpolate = (index:number) => {
    const START_POSITION = 0;

    const end_position = (
      START_POSITION - index * 60
    )

    return (
      animRef.interpolate({
        inputRange: [0,1],
        outputRange: [START_POSITION, end_position]
      })
    )
  }

  const rotationInterpolate = (
    animRef.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg','45deg']
    })
  )

  return (
    <View>
      <Animated.View style={[styles.Container,{backgroundColor: FloatingAddBtn,transform:[{translateY:positionInterpolate(1)}]}]} >
        <Pressable onPress={onPressCreateDeck} >
          <FeatherIcon name='file-plus' size={size * 0.8} color={color} />
        </Pressable>
      </Animated.View>
      <Animated.View style={[styles.Container,{backgroundColor: FloatingAddBtn,transform:[{rotateZ:rotationInterpolate}]}]} >
        <Pressable onPress={onPressExtend} >
          <FeatherIcon name='plus' size={size} color={color} />
        </Pressable>
      </Animated.View>
    </View>
  )
}

export default DeckCreateBtn;

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: 50,
    height: 50,
    left:10,
    top: 5,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
  }
})