import { GeneralStyle } from '@src/utils/styles';
import React, { Fragment } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

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
    <View>
      <View style={styles.ContentContainer}>
        <Text>
          name (*required)
        </Text>
        <TextInput 
          placeholder='name' 
          onChangeText={setDeckName} 
          style={styles.NameInput} 
          value={deckName} 
        />
      </View>
      <View style={styles.ContentContainer}>
        <Text>description</Text>
        <TextInput 
          placeholder='description' 
          onChangeText={setDeckDescription} 
          multiline={true} 
          style={styles.DescriptionInput} 
          numberOfLines={5} 
          value={deckDescription}
        />
      </View>
    </View>
  )
}

export default DeckInputBox;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentContainer: {
    padding:5
  },
  NameInput:{
    ...GeneralStyle.InputStyle,
    width: 250,
    marginVertical: 5,
  },
  DescriptionInput: {
    ...GeneralStyle.InputStyle,
    textAlignVertical: 'top',
    width: 250,
    marginVertical: 5,
  }
})