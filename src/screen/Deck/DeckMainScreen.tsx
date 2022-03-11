import DeckCollection from '@src/component/organism/DeckCollection';
import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import React from 'react';

const DeckMainScreen = () => {
  useBottomTabVisible();
  return (
    <T_Basic 
      Body={
        <DeckCollection />
      }
    />
  )
}

export default DeckMainScreen;