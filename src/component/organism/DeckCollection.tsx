import { useIsFocused } from '@react-navigation/native';
import {  getEverySortedDeckIds } from '@src/utils/deck';
import React, { useEffect, useMemo, useState } from 'react';
import DeckItemPreview from '../molecule/DeckItemPreview';
import T_DeckManage from '../template/T_DeckManage';

const DeckCollection = () => {
  const [deckIds, setDeckIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    setIsLoading(true);
    getEverySortedDeckIds()
    .then(deckIdArray => setDeckIds(deckIdArray))
    .finally(() => setIsLoading(false))
  },[isFocused])
  
  const DeckItemPreviewArray = deckIds.map(deckId => (
    <DeckItemPreview deckId={deckId} setDeckIds={setDeckIds} />
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