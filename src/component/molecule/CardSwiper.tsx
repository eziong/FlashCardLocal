import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import { Card, Deck, TabBarFirstScreen } from '@src/type';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SquareBtnFeather from '../atom/SquareBtnFeather';
import DeckViewContent from '../organism/DeckViewContent';
import CardView from './CardView';

const CardSwiper = ({
  deck,
  cardIds
}:{
  deck:Deck,
  cardIds:string[]
}) => {
  const navigation = useTypeStackNavigation();

  const onPressExit = () => {
    navigation.navigate(TabBarFirstScreen.HomeMainScreen);
  }

  return (
    <View>
      <SwiperFlatList
        data={cardIds}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.SwiperContainer} >
            <CardView cardId={item}/>
          </View>
        )}
        ListHeaderComponent={(
          <View style={styles.SwiperContainer} >
            <DeckViewContent deck={deck} />
          </View>
        )}
        ListFooterComponent={(
          <View style={styles.SwiperContainer} >
            <Text>the end</Text>
          </View>
        )}
      />
      <View style={styles.ExitBtnContainer} >
          <SquareBtnFeather 
            onPress={onPressExit}
            ContentStyle={{name:'log-out', size:30, color:'black'}}
          />
      </View>
    </View>
  )
}

export default CardSwiper;

const styles = StyleSheet.create({
  SwiperContainer: {
    height: fullScreen()[0],
    width: fullScreen()[1],
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,72,0.1)',
  },
  ExitBtnContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 10,
    right: 30,
    borderRadius:10,
    borderWidth: 3,
  }
})