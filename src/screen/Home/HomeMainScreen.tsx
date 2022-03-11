import CircleBtn from '@src/component/atom/CircleBtn';
import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import React from 'react';

const HomeMainScreen = () => {
  useBottomTabVisible();
  const navigation = useTypeStackNavigation();

  return(
    <T_Basic 
      Body={
        <CircleBtn 
          content='Learn'
          onPress={() => navigation.navigate('DeckSelectionScreen')}
        />
      }
    />
  )
}

export default HomeMainScreen;