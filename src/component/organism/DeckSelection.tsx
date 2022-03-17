import { useIsFocused } from '@react-navigation/native';
import { getEverySortedDeckIds } from '@src/utils/deck';
import React, { useEffect, useMemo, useState } from 'react';
import DeckItemPreview from '../molecule/DeckItemPreview';
import T_DeckView from '../template/T_DeckView';

const DeckSelection = () => {
  const [deckIds, setDeckIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    setIsLoading(true);
    getEverySortedDeckIds()
    .then((deckIdArray) => setDeckIds(deckIdArray))
    .finally(() => setIsLoading(false))
  },[isFocused])
  
  const DeckItemPreviewArray = useMemo(() => {
    return deckIds.map(deckId => (
      <DeckItemPreview deckId={deckId} readOnly/>
    ))
  },[deckIds.length])

  if(isLoading){
    return (
      <T_DeckView 
        elements={[]}
      />
    )
  }

  return (
    <T_DeckView 
      elements={DeckItemPreviewArray}
    />
  )
}

export default DeckSelection;