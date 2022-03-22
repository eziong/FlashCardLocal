import { useIsFocused } from '@react-navigation/native';
import { fullScreen } from '@src/navigation/constant';
import React, { ReactElement, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const T_Basic = ({
  Body,
  bottomTabBarHeight,
}:{
  Body:ReactElement,
  bottomTabBarHeight?:number,
}) => {
  const focused = useIsFocused();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if(focused){
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }
      ).start();
    }else{
      fadeAnim.setValue(0);
    }
    
  }, [focused])

  return (
    <View style={
      bottomTabBarHeight
      ? [styles.Container, {height: fullScreen()[0] - bottomTabBarHeight-50, marginTop: 10}]
      : [styles.Container, {height: fullScreen()[0]}]
    } >
      <Animated.View style={
        bottomTabBarHeight
        ? [styles.Body, {width: fullScreen()[1] - 10}, {opacity: fadeAnim}]
        : [styles.Body, {width: fullScreen()[1]}, {opacity: fadeAnim}]
        } >
        {Body}
      </Animated.View>
    </View>
  )
}

export default T_Basic;

const styles = StyleSheet.create({
  Container:{
    width: fullScreen()[1],
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header:{

  },
  Body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :'white',
    borderRadius: 10,
    elevation: 10,
  },
  Footer:{

  }
})