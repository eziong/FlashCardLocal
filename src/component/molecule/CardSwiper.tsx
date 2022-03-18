import { fullScreen } from '@src/navigation/constant';
import { Card } from '@src/type';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import CardView from './CardView';

const CardSwiper = ({
  cardIds
}:{
  cardIds:string[]
}) => {
  return (
    <SwiperFlatList
      data={cardIds}
      renderItem={({ item, index }) => (
        <View key={index} style={styles.SwiperContainer} >
          <CardView cardId={item}/>
        </View>
      )}
    />
  )
}

export default CardSwiper;

const styles = StyleSheet.create({
  SwiperContainer: {
    height: fullScreen()[0],
    width: fullScreen()[1],
    justifyContent:'center',
    alignItems:'center',
  }
})