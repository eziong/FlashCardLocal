export enum TabBarFirstScreen {
  HomeMainScreen = "HomeMainScreen",
  DeckMainScreen = "DeckMainScreen",
  AccountMainScreen = "AccountMainScreen",
}

export enum BottomTabName {
  HomeStack = "HomeStack",
  DeckStack = "DeckStack",
  AccountStack = "AccountStack",
}

export type ParamLimit = {
  Learning: {
    deckId:string,
  },
  DeckView: {
    deck: Deck,
  },
  EditDeck: {
    id: string,
    name: string,
    description: string,
  }
}

export enum AsyncType {
  DECK = "Deck",
  CARD = "Card",
}

export interface Deck {
  id: string;
  name: string;
  description: string;
  theme?: string;
}

export interface Card {
  deckId: string,
  id: string;
  content: CardContent,
}

export interface CardContent {
  question: string;
  answer: string;
}