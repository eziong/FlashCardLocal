import DeckSelection from '@src/component/organism/DeckSelection';
import T_Basic from '@src/component/template/T_Basic';
import React from 'react';

const DeckSelectionScreen = () => {
  return (
    <T_Basic 
      Body={
        <DeckSelection />
      }
    />
  )
}

export default DeckSelectionScreen;