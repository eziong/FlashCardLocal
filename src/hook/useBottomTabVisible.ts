import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import useTypeTabNavigation from './useTypeTabNavigation';

const useBottomTabVisible = () => {
  const focused = useIsFocused();
  const navigation = useTypeTabNavigation();

  useEffect(() => {
    if(focused) navigation?.setOptions({tabBarStyle:{display:'flex'}});
    else navigation?.setOptions({tabBarStyle:{display:'none'}});
  },[focused])
}

export default useBottomTabVisible;