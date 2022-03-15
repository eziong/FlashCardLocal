import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const DeckCreateHeader = ({
  deckName,
  setDeckName,
}:{
  deckName:string,
  setDeckName:(deckName:string) => void,
}) => {

  return (
    <View>
      <TextInput 
        placeholder='deck name'
        value={deckName}
        onChangeText={setDeckName}
      />
    </View>
  )
}

export default DeckCreateHeader;