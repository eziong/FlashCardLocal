import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import DeckStackNavigation from './DeckStackNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import SettingsStackNavigation from './SettingsStackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {display: 'none'}
      }}
    >
      {/* add stack navigators for bottom tab navigation as screen */}
      <Tab.Screen name="HomeStack" component={HomeStackNavigation} />
      <Tab.Screen name="Deck" component={DeckStackNavigation} />
      <Tab.Screen name="Settings" component={SettingsStackNavigation} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;