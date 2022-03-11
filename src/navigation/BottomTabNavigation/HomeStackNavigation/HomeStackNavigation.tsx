import { createStackNavigator } from '@react-navigation/stack';
import DeckSelectionScreen from '@src/screen/Home/DeckSelectionScreen';
import HomeMainScreen from '@src/screen/Home/HomeMainScreen';
import React from 'react';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='HomeMainScreen' component={HomeMainScreen} />
      <Stack.Screen name='DeckSelectionScreen' component={DeckSelectionScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation;