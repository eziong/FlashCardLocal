import AsyncStorage from "@react-native-async-storage/async-storage"
import { AsyncType, Card, CardContent, Deck } from "@src/type"
import { deleteAsyncStorage, generateKey, loadAsyncStorage, saveAsyncStorage } from "./db"

// utils
export const getEveryDeckIds = async() => {
  const allKeys = await AsyncStorage.getAllKeys();
  const deckIdArray = allKeys.filter((id) => id.split(':/')[0] === AsyncType.DECK);
  return deckIdArray;
}

export const getEveryCardIdsInDeck = async(deckId:string) => {
  const allKeys = await AsyncStorage.getAllKeys();
  const cardIdArray = allKeys.filter((id) => 
    id.split(':/')[0] === AsyncType.CARD && id.split(':/')[1] === deckId
  );
  return cardIdArray;
}

// deck
export const createDeck = async(name:string) => {
  const deck = {
    id: generateKey(AsyncType.DECK, name),
    name,
  }
  return await saveAsyncStorage<Deck>(deck.id, deck);
}

// export const readDeck = async(id:string) => {
//   return await loadAsyncStorage<Deck>(id);
// }

export const updateDeck = async(id:string, name:string) => {
  const deck = {
    id, name
  }
  return await saveAsyncStorage<Deck>(id,deck);
}

export const deleteDeck = async(id:string) => {
  return await deleteAsyncStorage(id);
}

// card
export const createCard = async(deckId:string, content:CardContent) => {
  const card = {
    deckId,
    id: generateKey(AsyncType.CARD, deckId),
    content,
  }
  return await saveAsyncStorage<Card>(card.id, card);
}

// export const readCard = async(cardId:string) => {
//   return await loadAsyncStorage<Card>(cardId);
// }

export const updateCard = async(deckId:string, cardId:string, content:CardContent) => {
  const card = {
    deckId,
    id: cardId,
    content,
  }
  return await saveAsyncStorage<Card>(cardId, card);
}

export const deleteCard = async(cardId:string) => {
  return await deleteAsyncStorage(cardId);
}