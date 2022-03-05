import { useIsFocused } from '@react-navigation/native';
import BottomTabVisibleState from '@src/store/state/BottomTabVisibleState';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useBottomTabVisible = () => {
  const focused = useIsFocused();
  const [_, setBottomTabVisibleState] = useRecoilState(BottomTabVisibleState)
  
  useEffect(() => {
    if(focused) setBottomTabVisibleState(false);
    else setBottomTabVisibleState(true);
  },[focused])
}

export default useBottomTabVisible;