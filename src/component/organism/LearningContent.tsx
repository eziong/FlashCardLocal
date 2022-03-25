import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { Deck } from '@src/type';
import { getEveryCardIdsInDeck } from '@src/utils/deck';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CardSwiper from '../molecule/CardSwiper';

const LearningContent = ({
  deckId,
}:{
  deckId:string,
}) => {
  const [deck, isLoading] = useLoadAsyncStorage<Deck>(deckId);
  const [cardIds, setCardIds] = useState<string[]>([]);

  useEffect(() => {
    getEveryCardIdsInDeck(deckId)
    .then((cardIdArray) => setCardIds(cardIdArray))
  },[])

  if(isLoading || !deck){
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    )
  }

  return(
    <CardSwiper cardIds={cardIds} deck={deck} />
  )
}

export default LearningContent;