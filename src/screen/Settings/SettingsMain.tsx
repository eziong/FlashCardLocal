import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import React from 'react';
import { View } from 'react-native';

const SettingsMain = () => {
  useBottomTabVisible();
  return(
    <T_Basic 
      Body={(
        <View></View>
      )}
    />
  )
}

export default SettingsMain