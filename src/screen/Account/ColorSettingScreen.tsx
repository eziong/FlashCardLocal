import ColorSettingContent from '@src/component/organism/ColorSettingContent';
import T_Basic from '@src/component/template/T_Basic';
import React from 'react';

const ColorSettingScreen = () => {
  return (
    <T_Basic 
      Body={<ColorSettingContent />}
    />
  )
}

export default ColorSettingScreen;