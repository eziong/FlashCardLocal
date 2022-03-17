export enum TabBarFirstScreen {
  HomeMainScreen = "HomeMainScreen",
  DeckMainScreen = "DeckMainScreen",
  SettingsMainScreen = "SettingsMainScreen",
}

export type ParamLimit = {
  Learning: {
    deckId:string,
  },
  DeckView: {
    deck: Deck,
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