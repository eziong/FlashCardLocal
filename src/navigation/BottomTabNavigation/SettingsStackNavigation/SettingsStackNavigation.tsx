import { createStackNavigator } from '@react-navigation/stack';
import SettingsMainScreen from '@src/screen/Settings/SettingsMainScreen';
import Test from '@src/screen/Settings/Test';
import { TabBarFirstScreen } from '@src/type';
import React from 'react';

const Stack = createStackNavigator();

const SettingsStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={TabBarFirstScreen.SettingsMainScreen}
      screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name={TabBarFirstScreen.SettingsMainScreen} component={SettingsMainScreen} />
      <Stack.Screen name='test' component={Test} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigation;