import { createStackNavigator } from '@react-navigation/stack';
import ColorSettingScreen from '@src/screen/Account/ColorSettingScreen';
import AccountMainScreen from '@src/screen/Account/AccountMainScreen';
import { TabBarFirstScreen } from '@src/type';
import React from 'react';
import ProfileScreen from '@src/screen/Account/ProfileScreen';
import GettingReadyScreen from '@src/screen/Account/GettingReadyScreen';

const Stack = createStackNavigator();

const AccountStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={TabBarFirstScreen.AccountMainScreen}
      screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name={TabBarFirstScreen.AccountMainScreen} component={AccountMainScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='ColorSettingScreen' component={ColorSettingScreen} />
      <Stack.Screen name='GettingReadyScreen' component={GettingReadyScreen} />
    </Stack.Navigator>
  )
}

export default AccountStackNavigation;