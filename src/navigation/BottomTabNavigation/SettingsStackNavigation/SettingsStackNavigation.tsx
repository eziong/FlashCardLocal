import { createStackNavigator } from '@react-navigation/stack';
import SettingsMainScreen from '@src/screen/Settings/SettingsMainScreen';
import Test from '@src/screen/Settings/Test';
import React from 'react';

const Stack = createStackNavigator();

const SettingsStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='SettingsMainScreen'
      screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name='SettingsMainScreen' component={SettingsMainScreen} />
      <Stack.Screen name='test' component={Test} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigation;