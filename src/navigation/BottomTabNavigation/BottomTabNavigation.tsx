import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabName } from '@src/type';
import React, { useEffect } from 'react';
import { bottomTabHeight } from '../constant';
import DeckStackNavigation from './DeckStackNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import AccountStackNavigation from './AccountStackNavigation';
import { HomeStackIcon, DeckStackIcon, AccountStackIcon, FloatingButton } from './TabBarButtons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel:false, 
        tabBarHideOnKeyboard: true,
      })}
    >
      {/* add stack navigators for bottom tab navigation as screen */}
      <Tab.Screen 
        name={BottomTabName.HomeStack} 
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <HomeStackIcon focused={focused} color={color} size={size} />
          ),
          tabBarButton: ({children, accessibilityState, onPress}:BottomTabBarButtonProps) => (
            <FloatingButton children={children} accessibilityState={accessibilityState} onPress={onPress} />
          )
        }}
        />
      <Tab.Screen 
        name={BottomTabName.DeckStack} 
        component={DeckStackNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <DeckStackIcon focused={focused} color={color} size={size} />
          ),
          tabBarButton: ({children, accessibilityState, onPress}:BottomTabBarButtonProps) => (
            <FloatingButton children={children} accessibilityState={accessibilityState} onPress={onPress} />
          )
        }}
        />
      <Tab.Screen 
        name={BottomTabName.AccountStack} 
        component={AccountStackNavigation} 
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AccountStackIcon focused={focused} color={color} size={size} />
          ),
          tabBarButton: ({children, accessibilityState, onPress}:BottomTabBarButtonProps) => (
            <FloatingButton children={children} accessibilityState={accessibilityState} onPress={onPress} />
          )
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;