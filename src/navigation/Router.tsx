import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import AuthStackNavigation from './AuthStackNavigation';

const Router = () => {
  const [authToken, setAuthToken] = useState(true);

  /**
   * get authToken logic
   */

  return(
    <NavigationContainer>
      {authToken
      ? (<BottomTabNavigation />)
      : (<AuthStackNavigation />)
      }
    </NavigationContainer>
  )
}

export default Router;