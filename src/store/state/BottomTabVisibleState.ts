import { atom } from "recoil";
import { AtomKey } from "../constant";

export default atom<'flex'|'none'>({
  key: AtomKey.BottomTabVisible,
  default: 'none',
})