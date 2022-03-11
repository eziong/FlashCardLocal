export enum AsyncType {
  DECK = "Deck",
  CARD = "Card",
}

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
}

export interface Card {
  id: string;
  question: string;
  answer: string;
}