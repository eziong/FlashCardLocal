import { useIsFocused } from '@react-navigation/native';
import { getEveryDeckIds } from '@src/utils/deck';
import React, { useEffect, useMemo, useState } from 'react';
import DeckItemPreview from '../molecule/DeckItemPreview';
import T_DeckView from '../template/T_DeckView';

const DeckSelection = () => {
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