import { RouteProp, useRoute } from '@react-navigation/native';
import DeckEditContent from '@src/component/organism/DeckEditContent';
import T_Basic from '@src/component/template/T_Basic';
import { ParamLimit } from '@src/type';
import React from 'react';

const DeckEditScreen = () => {
  const {params:{id, name, description}} = useRoute<RouteProp<ParamLimit,'EditDeck'>>();
  return (
    <T_Basic 
      Body={<DeckEditContent 
        id={id}
        name={name}
        description={description}
      />}
    />
  )
}

export default DeckEditScreen;