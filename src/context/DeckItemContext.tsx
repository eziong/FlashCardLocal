import React, { createContext } from 'react';

interface DeckItemContextValueInterface {
  id: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setDeckIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const DeckItemContext = createContext<DeckItemContextValueInterface>({
  id: '',
  name: '',
  setName: () => null,
  description: '',
  setDescription: () => null,
  setDeckIds: () => null,
});

export default DeckItemContext;