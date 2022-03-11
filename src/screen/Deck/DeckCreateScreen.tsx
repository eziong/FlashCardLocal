import DeckCreateFooter from '@src/component/organism/DeckCreateFooter';
import DeckCreateHeader from '@src/component/organism/DeckCreateHeader';
import T_DeckCreate from '@src/component/template/T_DeckCreate'
import newDeckState from '@src/store/state/newDeckState';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

const DeckCreateScreen = () => {
  const [newDeck, _] = useRecoilState(newDeckState);
  
  return (
    <T_DeckCreate 
      Header={<DeckCreateHeader />}
      data={newDeck.cards}
      Footer={<DeckCreateFooter />}
    />
  )
}

export default DeckCreateScreen;