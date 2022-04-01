/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { SettingContextProvider } from '@src/context/SettingContext';
import Router from '@src/navigation/Router';
import React from 'react';

const App = () => {

  return (
    <SettingContextProvider>
      <Router />
    </SettingContextProvider>
  );
};

export default App;
