import { GeneralStyle } from '@src/utils/styles';
import React, { Fragment } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const DeckInputBox = ({
  deckName,
  setDeckName,
  deckDescription,
  setDeckDescription,
}:{
  deckName:string,
  setDeckName: React.Dispatch<React.SetStateAction<string>>,
  deckDescription:string,
  setDeckDescription: React.Dispatch<React.SetStateAction<string>>,
}) => {
  return (
    <Fragment>
      <View style={styles.ContentContainer}>
        <TextInput 
          placeholder='name' 
          onChangeText={setDeckName} 
          style={styles.NameInput} 
          value={deckName} 
        />
      </View>
      <View style={styles.ContentContainer}>
        <TextInput 
          placeholder='description' 
          onChangeText={setDeckDescription} 
          multiline={true} 
          style={styles.DescriptionInput} 
          numberOfLines={5} 
          value={deckDescription}
        />
      </View>
    </Fragment>
  )
}

export default DeckInputBox;

const styles = StyleSheet.create({
  ContentContainer: {
    padding:5
  },
  NameInput:{
    ...GeneralStyle.InputStyle
  },
  DescriptionInput: {
    ...GeneralStyle.InputStyle,
    textAlignVertical: 'top',
  }
})