import GettingReadyContent from '@src/component/organism/GettingReadyContent';
import T_Basic from '@src/component/template/T_Basic';
import React from 'react';

const GettingReadyScreen = () => {
  return (
    <T_Basic 
      Body={<GettingReadyContent />}
    />
  )
}

export default GettingReadyScreen;