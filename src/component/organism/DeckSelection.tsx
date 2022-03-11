import React from 'react';
import DeckItem from '../molecule/DeckItem';
import T_DeckView from '../template/T_DeckView';

const DeckSelection = () => {
  return (
    <T_DeckView 
      elements={[<DeckItem deckId='1' readOnly/>, <DeckItem deckId='2' readOnly/>]}
    />
  )
}

export default DeckSelection;