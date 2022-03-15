import { atom } from "recoil";
import { AtomKey } from "../constant";

export default atom<string[]>({
  key:AtomKey.NEWCARDS,
  default: []
})