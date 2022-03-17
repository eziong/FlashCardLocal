import useLoadAsyncStorage from '@src/hook/useLoadAsyncStorage';
import { getEveryCardIdsInDeck } from '@src/utils/deck';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CardSwiper from '../molecule/CardSwiper';

const LearningContent = ({
  deckId,
}:{
  deckId:string,
}) => {
  const [cardIds, setCardIds] = useState<string[]>([]);

  useEffect(() => {
    getEveryCardIdsInDeck(deckId)
    .then((cardIdArray) => setCardIds(cardIdArray))
  },[])

  return(
    <View>
      <CardSwiper cardIds={cardIds} />
    </View>
  )
}

export default LearningContent;