import { Dimensions, Platform, StatusBar } from "react-native";

export enum StackNavigationName {
  HomeStack = "HomeStackNavigation",
  DeckStack = "DeckStackNavigation",
  SettingsStack = "SettingsStackNavigation",
}

export const bottomTabHeight = 100;

export const fullScreen = () => {
  switch(Platform.OS){
    case "ios": {
      const {height, width} = Dimensions.get('window');
      return [height, width];
    }
    case "android": {
      const {height, width} = Dimensions.get('window');
      const statusBarHeight = StatusBar?.currentHeight || 24;
      return [height-statusBarHeight, width];
    }
    default:{
      const {height, width} = Dimensions.get('window');
      return [height, width];
    }
  }

}