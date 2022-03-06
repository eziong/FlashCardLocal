import { useIsFocused } from '@react-navigation/native';
import BottomTabVisibleState from '@src/store/state/BottomTabVisibleState';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useBottomTabVisible = () => {
  const focused = useIsFocused();
  const [_, setBottomTabVisibleState] = useRecoilState(BottomTabVisibleState)
  
  useEffect(() => {
    if(focused) setBottomTabVisibleState('flex');
    else setBottomTabVisibleState('none');
  },[focused])
}

export default useBottomTabVisible;