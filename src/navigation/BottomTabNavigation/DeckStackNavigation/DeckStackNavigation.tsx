import { createStackNavigator } from '@react-navigation/stack';
import DeckCreateSreen from '@src/screen/Deck/DeckCreateScreen';
import DeckMainScreen from '@src/screen/Deck/DeckMainScreen';
import { TabBarFirstScreen } from '@src/type';
import React from 'react';

const Stack = createStackNavigator();

const DeckStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={TabBarFirstScreen.DeckMainScreen}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={TabBarFirstScreen.DeckMainScreen} component={DeckMainScreen} />
      <Stack.Screen name='DeckCreateScreen' component={DeckCreateSreen} />
      
    </Stack.Navigator>
  )
}

export default DeckStackNavigation;