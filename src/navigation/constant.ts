import { Dimensions, Platform, StatusBar } from "react-native";

export enum StackNavigationName {
  HomeStack = "HomeStackNavigation",
  DeckStack = "DeckStackNavigation",
  AccountStack = "AccountStackNavigation",
}

export const bottomTabHeight = 70;

export const fullScreen = (ratio:number = 1) => {
  switch(Platform.OS){
    case "ios": {
      const {height, width} = Dimensions.get('window');
      return [height * ratio, width * ratio];
    }
    case "android": {
      const {height, width} = Dimensions.get('window');
      const statusBarHeight = StatusBar?.currentHeight || 24;
      return [(height-statusBarHeight) * ratio, width * ratio];
    }
    default:{
      const {height, width} = Dimensions.get('window');
      return [height * ratio, width * ratio];
    }
  }

}