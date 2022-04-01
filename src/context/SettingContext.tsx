import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { COLOR } from '@src/utils/styles';
import React, { createContext, useContext, useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';

export interface SettingContextValueInterface {
  settings: {
    color:{
      TabBarIcon: COLOR,
      TabBarIconBackground: COLOR,
      FloatingAddBtn: COLOR,
      OddLine: COLOR,
      EvenLine:COLOR,
      LearnBtn: COLOR,
      ModalBackground: COLOR,
      CardFace: COLOR,
      CardBack: COLOR,
    },
  }
  setSettings: React.Dispatch<React.SetStateAction<typeof defaultSettingsValue>>,
}

export const defaultSettingsValue = {
  color: {
    TabBarIcon: COLOR.GREEN_1,
    TabBarIconBackground: COLOR.YELLOW_1,
    FloatingAddBtn: COLOR.RED_1,
    OddLine: COLOR.ODD_LINE,
    EvenLine:COLOR.EVEN_LINE,
    LearnBtn: COLOR.RED_1,
    ModalBackground: COLOR.MODAL_BACKGROUND,
    CardFace: COLOR.BLUE_1,
    CardBack: COLOR.GREEN_1,
  }
}

const SettingContext = createContext<SettingContextValueInterface>({
  settings: defaultSettingsValue,
  setSettings: () => {},
});

export const SettingContextProvider = ({
  children,
}:{
  children: React.ReactNode,
}) => {
  const [settings, setSettings] = useState<typeof defaultSettingsValue>(
    defaultSettingsValue
  );
  const [loadedSettings, isLoading] = useLoadAsyncStorage<typeof defaultSettingsValue>('settings');

  useEffect(() => {
    if(isLoading) return;
    if(loadedSettings){
      setSettings(loadedSettings);
    }
    SplashScreen.hide();
  },[isLoading])

  const value = {
    settings,
    setSettings,
  }

  return (
    <SettingContext.Provider value={value} >
      {children}
    </SettingContext.Provider>
  )
}

export const useSettingsContext = () =>  useContext(SettingContext);