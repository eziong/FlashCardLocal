import { createStackNavigator } from '@react-navigation/stack';
import SettingsMain from '@src/screen/Settings/SettingsMain';
import Test from '@src/screen/Settings/Test';
import React from 'react';

const Stack = createStackNavigator();

const SettingsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SettingsMainScreen' component={SettingsMain} />
      <Stack.Screen name='test' component={Test} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigation;