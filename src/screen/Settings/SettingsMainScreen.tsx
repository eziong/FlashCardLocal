import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import { bottomTabHeight } from '@src/navigation/constant';
import React from 'react';
import { Text, View } from 'react-native';

const SettingsMainScreen = () => {
  useBottomTabVisible();
  return(
    <T_Basic 
      Body={(
        <View>
          <Text>hihi</Text>
        </View>
      )}
      bottomTabBarHeight={bottomTabHeight}
    />
  )
}

export default SettingsMainScreen