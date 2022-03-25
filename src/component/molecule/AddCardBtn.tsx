import { fullScreen } from '@src/navigation/constant';
import { getEveryCardIdsInDeck } from '@src/utils/deck';
import React, { Fragment, useState } from 'react';
import AddCardModal from './AddCardModal';
import CardCreateBtn from './CardCreateBtn';

const AddCardBtn = ({
  deckId,
  setCardIds,
}:{
  deckId:string,
  setCardIds: React.Dispatch<React.SetStateAction<string[]>>,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onOpenModal = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
  }

  const onAddCardIdInArray = (cardId:string) => {
    setCardIds(prev => [...prev, cardId])
  }

  return(
    <Fragment>
      <CardCreateBtn 
        onOpenModal={onOpenModal}
        size={30}
        color="black"
      />
      <AddCardModal
        deckId={deckId}
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
        onAddCardIdInArray={onAddCardIdInArray}
      />
    </Fragment>
  )
}

export default AddCardBtn;