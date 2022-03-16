import React, { createContext } from 'react';

interface DeckItemContextValueInterface {
  id: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const DeckItemContext = createContext<DeckItemContextValueInterface>({
  id: '',
  name: '',
  setName: () => null,
});

export default DeckItemContext;