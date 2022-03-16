import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { createDeck } from '@src/utils/deck';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SquareBtn from '../atom/SquareBtn';

const DeckCreateContent = () => {
  const [deckName, setDeckName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigation = useTypeStackNavigation();

  const onPressSave = () => {
    if(disabled) return;
    if(deckName.length > 0){
      setDisabled(true);
      createDeck(deckName)
      .then(() => setDisabled(false))
      .finally(() => navigation.goBack())
    }
  }

  const onPressCancle = () => {
    if(disabled) return;
    setDeckName('');
    navigation.goBack();
  }

  return (
    <View style={styles.Container} >
      <TextInput placeholder='name' onChangeText={setDeckName} />
      <View style={styles.DoubleBtnContainer} >
        <SquareBtn 
          content='Save' 
          ContainerStyle={styles.BtnContainer}
          onPress={onPressSave}
        />
        <SquareBtn 
          content='Cancle' 
          ContainerStyle={styles.BtnContainer}
          onPress={onPressCancle}
        />
      </View>
    </View>
  )
}

export default DeckCreateContent;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column'
  },
  DoubleBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 25,
  },
  BtnContainer: {
    width: 85,
    height: 50
  }
})