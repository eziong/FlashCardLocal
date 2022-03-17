import { RouteProp, useRoute } from '@react-navigation/native';
import LearningContent from '@src/component/organism/LearningContent';
import T_Basic from '@src/component/template/T_Basic';
import { ParamLimit } from '@src/type'
import React from 'react';

const LearningScreen = () => {
  const {params:{deckId}} = useRoute<RouteProp<ParamLimit, "Learning">>();
  
  return(
    <T_Basic 
      Body={<LearningContent deckId={deckId} />}
    />
  )
}

export default LearningScreen;