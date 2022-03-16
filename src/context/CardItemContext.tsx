import React, { createContext } from 'react';

interface CardItemContextValueInterface {
  id: string;
  deckId: string;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const CardItemContext = createContext<CardItemContextValueInterface>({
  id: '',
  deckId: '',
  question: '',
  answer: '',
  setQuestion: () => null,
  setAnswer: () => null,
});

export default CardItemContext;