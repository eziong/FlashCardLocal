import { useIsFocused } from '@react-navigation/native';
import { AsyncType, Deck } from '@src/type';
import { getDBTableIndexKeys } from '@src/utils';
import React, { useEffect, useMemo, useState } from 'react';
import DeckItem from '../molecule/DeckItem';
import T_DeckManage from '../template/T_DeckManage';

const DeckCollection = () => {
  const [deckIds, setDeckIds] = useState<string[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getDBTableIndexKeys(AsyncType.DECK)
    .then(([success,data]) => {
      console.log(success, data)
      return success ? setDeckIds(data ? data : []) : setDeckIds([])
    })
  },[isFocused])
  
  const DeckItemArray = useMemo(() => {
    return deckIds.map(deckId => (
      <DeckItem deckId={deckId} />
    ))
  },[deckIds.length])



  return (
    <T_DeckManage 
      elements={DeckItemArray}
    />
  )
}

export default DeckCollection;