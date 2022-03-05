import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import DeckStackNavigation from './DeckStackNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import SettingsStackNavigation from './SettingsStackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      {/* add stack navigators for bottom tab navigation as screen */}
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Deck" component={DeckStackNavigation} />
      <Tab.Screen name="Settings" component={SettingsStackNavigation} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;