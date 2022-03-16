import { useIsFocused } from '@react-navigation/native';
import { AsyncType, Deck } from '@src/type';
import { getEveryDeckIds } from '@src/utils/deck';
import React, { useEffect, useMemo, useState } from 'react';
import DeckItemPreview from '../molecule/DeckItemPreview';
import T_DeckManage from '../template/T_DeckManage';

const DeckCollection = () => {
  const [deckIds, setDeckIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    setIsLoading(true);
    getEveryDeckIds()
    .then((deckIdArray) => setDeckIds(
      deckIdArray
      .sort((a,b) => 
      a.split(':/')[1] > b.split(':/')[1] ? 1 : 0
    )))
    .finally(() => setIsLoading(false))
  },[isFocused])
  
  const DeckItemPreviewArray = deckIds.map(deckId => (
    <DeckItemPreview deckId={deckId} />
  ))

  if(isLoading){
    return (
      <T_DeckManage 
        elements={[]}
      />
    )
  }

  return (
    <T_DeckManage 
      elements={DeckItemPreviewArray}
    />
  )
}

export default DeckCollection;