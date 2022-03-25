import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { fullScreen } from '@src/navigation/constant';
import { Card } from '@src/type';
import React, {useRef,useEffect, useState} from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const CardView = ({
  cardId
}:{
  cardId:string
}) => {
  const [card, isLoading] = useLoadAsyncStorage<Card>(cardId);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const rotateRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateRef,{
      toValue: isFlipped ? 180 : 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  },[isFlipped])

  const frontInterpolate = (
    rotateRef.interpolate({
      inputRange: [0,180],
      outputRange: ['0deg','180deg']
    })
  )
  const backInterpolate = (
    rotateRef.interpolate({
      inputRange: [0,180],
      outputRange: ['180deg','360deg']
    })
  )

  const onPress = () => {
    setIsFlipped(prev => !prev);
  }
  
  if(isLoading || !card){
    return (
      <View>
        <Text>isLoading</Text>
      </View>
    )
  }
  return (
    <Pressable onPress={onPress} >
      <View style={styles.Container} >
        <Animated.View style={[styles.CardBase ,styles.CardFront, {transform:[{rotateY: frontInterpolate}]}]} >
          <View style={styles.CardBaseInner}>
            <Text style={styles.TextStyle} >{card.content.question}</Text>
          </View>
        </Animated.View>
        <Animated.View style={[styles.CardBase ,styles.CardBack, {transform:[{rotateY: backInterpolate}]}]} >
          <View style={styles.CardBaseInner}>
            <Text style={styles.TextStyle} >{card.content.answer}</Text>
          </View>
        </Animated.View>
      </View>
    </Pressable>
  )
}

export default CardView;

const styles = StyleSheet.create({
  Container: {
    height:fullScreen()[0] * 0.8,
    width: fullScreen()[1] * 0.8,
  },
  CardBase: {
    position:'absolute',
    height:fullScreen()[0] * 0.8,
    width: fullScreen()[1] * 0.8,
    backgroundColor:'green',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  CardBaseInner: {
    height:fullScreen()[0] * 0.8 - 40,
    width: fullScreen()[1] * 0.8 - 40,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 30,
  },
  CardFront: {
    backgroundColor:'green',
  },
  CardBack: {
    backgroundColor:'skyblue',
  },
  TextStyle: {
    fontSize: 30,
    color: 'black',
  }
})