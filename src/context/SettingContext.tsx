import { COLOR } from '@src/utils/styles';
import React, { createContext } from 'react';

interface SettingContextValueInterface {
  color:{
    TabBarIcon: string,
    TabBarIconBackground: string,
    FloatingAddBtn: string,
    OddLine: string,
    EvenLine:string,
    LearnBtn: string,
  }
}

const SettingContext = createContext<SettingContextValueInterface>({
  color: {
    TabBarIcon: COLOR.GREEN_1,
    TabBarIconBackground: COLOR.YELLOW_1,
    FloatingAddBtn: COLOR.RED_1,
    OddLine: COLOR.YELLOW_1,
    EvenLine:COLOR.GREEN_1,
    LearnBtn: COLOR.RED_1,
  }
});

export const SettingContextProvider = ({
  children,
  value,
}:{
  children: React.ReactNode,
  value: SettingContextValueInterface,
}) => {
  return (
    <SettingContext.Provider value={value} >
      {children}
    </SettingContext.Provider>
  )
}