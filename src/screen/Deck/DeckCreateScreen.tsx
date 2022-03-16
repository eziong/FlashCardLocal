import DeckCreateContent from '@src/component/organism/DeckCreateContent';
import T_Basic from '@src/component/template/T_Basic';
import T_DeckCreate from '@src/component/template/T_DeckCreate';
import React, { useState } from 'react';

const DeckCreateScreen = () => {
  
  return (
    <T_Basic 
      Body={
        <DeckCreateContent />
      }
    />
  )
}

export default DeckCreateScreen;