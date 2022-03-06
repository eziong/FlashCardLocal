import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '@src/screen/Home/HomeMain';
import Test from '@src/screen/Home/Test';
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
      <Stack.Screen name='HomeMainScreen' component={HomeMain} />
      <Stack.Screen name='test' component={Test} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation;