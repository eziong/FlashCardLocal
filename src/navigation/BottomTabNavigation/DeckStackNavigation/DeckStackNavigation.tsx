import { createStackNavigator } from '@react-navigation/stack';
import DeckMain from '@src/screen/Deck/DeckMain';
import Test from '@src/screen/Deck/Test';
import React from 'react';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='DeckMainScreen' component={DeckMain} />
      <Stack.Screen name='test' component={Test} />
    </Stack.Navigator>
  )
}

export default MainStackNavigation;