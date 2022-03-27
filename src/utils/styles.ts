import { StyleSheet } from "react-native";

export const GeneralStyle = StyleSheet.create({
  InputStyle:{
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  }
})

export enum COLOR {
  RED_1 = "rgba(255,0,0,1)",
  RED_2 = "rgba(255,0,0,1)",
  RED_3 = "rgba(255,0,0,1)",
  GREEN_1 = "rgba(0,255,0,1)",
  GREEN_2 = "rgba(0,255,0,1)",
  GREEN_3 = "rgba(0,255,0,1)",
  BLUE_1 = "rgba(0,0,255,1)",
  BLUE_2 = "rgba(0,0,255,1)",
  BLUE_3 = "rgba(0,0,255,1)",
  YELLOW_1 = "rgba(255,255,0,1)",
  YELLOW_2 = "rgba(255,255,0,1)",
  YELLOW_3 = "rgba(255,255,0,1)",
}