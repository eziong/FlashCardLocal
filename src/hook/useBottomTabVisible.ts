import { useIsFocused } from '@react-navigation/native';
import { bottomTabHeight } from '@src/navigation/constant';
import React, { useEffect } from 'react';
import useTypeTabNavigation from './useTypeTabNavigation';

const useBottomTabVisible = () => {
  const focused = useIsFocused();
  const tabNavigation = useTypeTabNavigation();
  
  useEffect(() => {
    if(tabNavigation){
      if(focused) tabNavigation.setOptions({
        tabBarStyle:{display:'flex', height: bottomTabHeight}, 
        style:{height: bottomTabHeight}
      });
      else tabNavigation.setOptions({tabBarStyle:{display:'none'}});
    }
  },[focused])
}

export default useBottomTabVisible;