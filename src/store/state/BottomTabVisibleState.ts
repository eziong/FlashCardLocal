import { atom } from "recoil";
import { AtomKey } from "../constant";

export default atom<boolean>({
  key: AtomKey.BottomTabVisible,
  default: false,
})