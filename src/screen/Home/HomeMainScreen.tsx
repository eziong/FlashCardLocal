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
          onPress={() => navigation.navigate('DeckSelectionScreen')}
          ContainerStyle={styles.ContainerStyle}
          ContentStyle={{name:"cards-playing-outline", size:70, color:'black'}}
        />
      }
      bottomTabBarHeight={bottomTabHeight}
    />
  )
}

export default HomeMainScreen;

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: 'rgba(255,226,226,1)'
  },
  ContentStyle: {
    color: 'black'
  }
})