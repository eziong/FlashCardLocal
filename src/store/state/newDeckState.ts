import { AsyncType, Deck } from "@src/type";
import { generateDBTableName } from "@src/utils";
import { atom } from "recoil";
import { AtomKey } from "../constant";

export default atom<Deck>({
  key:AtomKey.NEWDECK,
  default: {
    id: generateDBTableName(AsyncType.DECK),
    name: '',
    cards: []
  }
})

export const deckAtomGenerator = () => {
  return {
    id: generateDBTableName(AsyncType.DECK),
    name: '',
    cards: []
  }
}