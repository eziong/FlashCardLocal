import { RouteProp, useRoute } from '@react-navigation/native';
import DeckViewContent from '@src/component/organism/DeckViewContent';
import T_Basic from '@src/component/template/T_Basic';
import { ParamLimit } from '@src/type';
import React from 'react';

const DeckViewScreen = () => {
  const {params:{deck}} = useRoute<RouteProp<ParamLimit,"DeckView">>();

  return (
    <T_Basic 
      Body={
        <DeckViewContent deck={deck} />
      }
    />
  )
}

export default DeckViewScreen;