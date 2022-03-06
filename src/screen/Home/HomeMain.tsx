import CircleBtn from '@src/component/atom/CircleBtn';
import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import useTypeNavigation from '@src/hook/useTypeNavigation';
import { StackNavigationName } from '@src/navigation/constant';
import React from 'react';

const HomeMain = () => {
  useBottomTabVisible();
  const navigation = useTypeNavigation(StackNavigationName.HomeStack);
  
  return(
    <T_Basic 
      Body={
        <CircleBtn 
          content='Learn'
          onPress={() => navigation.navigate('test')}
        />
      }
    />
  )
}

export default HomeMain;