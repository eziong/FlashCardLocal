import DeckCreateContent from '@src/component/organism/DeckCreateContent';
import T_DeckCreate from '@src/component/template/T_DeckCreate';
import React, { useState } from 'react';

const DeckCreateScreen = () => {
  
  return (
    <T_DeckCreate 
      content={
        <DeckCreateContent />
      }
    />
  )
}

export default DeckCreateScreen;