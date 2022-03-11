import newDeckState from '@src/store/state/newDeckState';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';

const DeckCreateHeader = () => {
  const [newDeck, setNewDeck] = useRecoilState(newDeckState);

  const onChangeName = (text:string) => {
    setNewDeck((prev) => ({...prev, name: text}))
  }

  return (
    <View>
      <TextInput 
        placeholder='deck name'
        value={newDeck.name}
        onChangeText={onChangeName}
      />
    </View>
  )
}

export default DeckCreateHeader;