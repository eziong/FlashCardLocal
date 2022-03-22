import CircleBtn from '@src/component/atom/CircleBtn';
import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { bottomTabHeight } from '@src/navigation/constant';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeMainScreen = () => {
  useBottomTabVisible();
  const navigation = useTypeStackNavigation();

  return(
    <T_Basic 
      Body={
        <CircleBtn 
          content='Learn'
          onPress={() => navigation.navigate('DeckSelectionScreen')}
          ContainerStyle={styles.ContainerStyle}
          ContentStyle={styles.ContentStyle}
        />
      }
      bottomTabBarHeight={bottomTabHeight}
    />
  )
}

export default HomeMainScreen;

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: 'skyblue'
  },
  ContentStyle: {
    color: 'black'
  }
})