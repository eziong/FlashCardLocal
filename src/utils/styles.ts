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
  RED_1 = "rgba(255,196,196,1)",
  RED_2 = "rgba(255,128,128,1)",
  RED_3 = "rgba(255,72,72,1)",
  GREEN_1 = "rgba(196,255,196,1)",
  GREEN_2 = "rgba(128,255,128,1)",
  GREEN_3 = "rgba(72,255,72,1)",
  BLUE_1 = "rgba(196,196,255,1)",
  BLUE_2 = "rgba(128,128,255,1)",
  BLUE_3 = "rgba(72,72,255,1)",
  YELLOW_1 = "rgba(255,255,196,1)",
  YELLOW_2 = "rgba(255,255,128,1)",
  YELLOW_3 = "rgba(255,255,72,1)",
  MODAL_BACKGROUND = "rgba(128,128,128,0.5)",
  SWIPER_BACKGROUND = "rgba(255,255,72,0.1)",
  ODD_LINE = "rgba(256,256,196,0.3)",
  EVEN_LINE = "rgba(228,256,228,0.3)",
  TEXT_1 = "rgba(72,72,72,1)",
}