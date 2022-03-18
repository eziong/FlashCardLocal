import AsyncStorage from "@react-native-async-storage/async-storage"
import { AsyncType, Card, CardContent, Deck } from "@src/type"
import { deleteAsyncStorage, generateKey, loadAsyncStorage, saveAsyncStorage } from "./db"

// utils
export const getEveryDeckIds = async() => {
  const allKeys = await AsyncStorage.getAllKeys();
  const deckIdArray = allKeys.filter((id) => id.split(':/')[0] === AsyncType.DECK);
  return deckIdArray;
}

export const getEverySortedDeckIds = async() => {
  const allKeys = await AsyncStorage.getAllKeys();
  const deckIdArray = allKeys.filter((id) => id.split(':/')[0] === AsyncType.DECK);
  const deckArray = await Promise.all(deckIdArray.map((deckId) => loadAsyncStorage<Deck>(deckId)));
  const sortedDeckIdArray = deckArray.sort((a,b) => {
    if(a[1] && b[1]) return a[1].name > b[1].name ? 1 : -1;
    return 1;
  }).map(deck => deck[1]?.id).filter((deckId):deckId is string => typeof deckId === "string");

  return sortedDeckIdArray;
}

export const getEveryCardIdsInDeck = async(deckId:string) => {
  const allKeys = await AsyncStorage.getAllKeys();
  const cardIdArray = allKeys.filter((id) => 
    id.split(':/')[0] === AsyncType.CARD && id.split('$$')[1] === deckId
  );
  return cardIdArray;
}

// export const getDeckTheme = async() => {
  
// }

// deck
export const createDeck = async(name:string, description:string) => {
  const deck = {
    id: generateKey(AsyncType.DECK),
    name,
    description,
  }
  return await saveAsyncStorage<Deck>(deck.id, deck);
}

// export const readDeck = async(id:string) => {
//   return await loadAsyncStorage<Deck>(id);
// }

export const updateDeck = async(id:string, name:string, description:string) => {
  const deck = {
    id, name, description
  }
  return await saveAsyncStorage<Deck>(id,deck);
}

// card
export const createCard = async(deckId:string, content:CardContent) => {
  const cardId = generateKey(AsyncType.CARD, deckId);
  const card = {
    deckId,
    id: cardId,
    content,
  }
  await saveAsyncStorage<Card>(card.id, card);
  return cardId;
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