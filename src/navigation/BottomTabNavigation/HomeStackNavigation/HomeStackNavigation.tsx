import { createStackNavigator } from '@react-navigation/stack';
import DeckSelectionScreen from '@src/screen/Home/DeckSelectionScreen';
import HomeMainScreen from '@src/screen/Home/HomeMainScreen';
import { TabBarFirstScreen } from '@src/type';
import React from 'react';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={TabBarFirstScreen.HomeMainScreen}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={TabBarFirstScreen.HomeMainScreen} component={HomeMainScreen} />
      <Stack.Screen name='DeckSelectionScreen' component={DeckSelectionScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation;