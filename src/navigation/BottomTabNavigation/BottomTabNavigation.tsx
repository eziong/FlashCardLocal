import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabVisibleState from '@src/store/state/BottomTabVisibleState';
import React from 'react';
import { useRecoilState } from 'recoil';
import DeckStackNavigation from './DeckStackNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import SettingsStackNavigation from './SettingsStackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBarVisible, _] = useRecoilState(BottomTabVisibleState);
  console.log(tabBarVisible)
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {display: tabBarVisible}
      }}
    >
      {/* add stack navigators for bottom tab navigation as screen */}
      <Tab.Screen name="HomeStack" component={HomeStackNavigation} />
      {/* <Tab.Screen name="Deck" component={DeckStackNavigation} />
      <Tab.Screen name="Settings" component={SettingsStackNavigation} /> */}
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;