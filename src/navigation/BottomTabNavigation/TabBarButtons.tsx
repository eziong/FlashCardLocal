import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { AccessibilityState, Animated, GestureResponderEvent, NativeSyntheticEvent, Pressable, StyleSheet, TargetedEvent, View } from 'react-native';

export const HomeStackIcon = ({
  focused,
  color,
  size,
}:{
  focused: boolean,
  color: string,
  size: number
}) => {
  if(focused){
    return <MaterialIcon name='book-open-page-variant' size={size * 2} color="green" />
  }
  return <MaterialIcon name='book-open-page-variant' size={size * 1.5} color={color} />
}

export const DeckStackIcon = ({
  focused,
  color,
  size,
}:{
  focused: boolean,
  color: string,
  size: number
}) => {
  if(focused){
    return <MaterialIcon name='bookshelf' size={size * 2} color="green" />
  }
  return <MaterialIcon name='bookshelf' size={size * 1.5} color={color} />
}

export const SettingsStackIcon = ({
  focused,
  color,
  size,
}:{
  focused: boolean,
  color: string,
  size: number
}) => {
  if(focused){
    return <FeatherIcon name='settings' size={size * 2} color="green" />
  }
  return <FeatherIcon name='settings' size={size * 1.5} color={color} />
}

export const FloatingButton = ({
  children,
  onPress,
  accessibilityState,
}:{
  children: ReactNode ,
  onPress?: (e: GestureResponderEvent) => void,
  accessibilityState?: AccessibilityState,
}) => {
  const buttonPositionAnimation = useRef(new Animated.Value(0)).current;
  const buttonBackgroundColorAnimation = useRef(new Animated.Value(0)).current;

  const focused = accessibilityState?.selected;

  useEffect(() => {
    if(focused){
      Animated.timing(buttonPositionAnimation,{
        toValue: -20,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(buttonBackgroundColorAnimation,{
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }else{
      Animated.timing(buttonPositionAnimation,{
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(buttonBackgroundColorAnimation,{
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  },[focused])

  // const styles = StyleSheet.create({
  //   Container: {
  //     Animated
  //   }
  // })
  
  return (
    
    <Pressable
      onPress={onPress}
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Animated.View
        style={{
          justifyContent:'center',
          alignItems:'center',
          transform: [{
            translateY: buttonPositionAnimation,
          }],
        }}
      >
        <Animated.View 
          style={{
            position:'absolute',
            borderRadius: 50,
            width: 70,
            height: 70,
            backgroundColor: 'yellow',
            justifyContent:'center',
            alignItems:'center',
            transform: [{
              scale: buttonBackgroundColorAnimation,
            }],
          }}
        />
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
          }}
        >
          {children}
        </View>
      </Animated.View>
    </Pressable>
  
)}