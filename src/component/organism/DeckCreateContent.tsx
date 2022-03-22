import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { createDeck } from '@src/utils/deck';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import SquareBtn from '../atom/SquareBtn';
import DeckInputBox from '../molecule/DeckInputBox';

const DeckCreateContent = () => {
  const [deckName, setDeckName] = useState<string>('');
  const [deckDescription, setDeckDescription] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigation = useTypeStackNavigation();

  const onPressSave = () => {
    if(disabled) return;
    if(deckName.length > 0){
      setDisabled(true);
      createDeck(deckName, deckDescription)
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
    <KeyboardAvoidingView
      style={{flex:1}}
      behavior="padding"
    >
    <View style={styles.Container} >
      <View style={styles.HeaderContainer} >
        <Text style={styles.HeaderText} >Write new deck information</Text>
      </View>
      <View style={styles.BodyContainer} >
        <DeckInputBox 
          deckName={deckName}
          setDeckName={setDeckName}
          deckDescription={deckDescription}
          setDeckDescription={setDeckDescription}
        />
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
    </View>
    </KeyboardAvoidingView>
  )
}

export default DeckCreateContent;

const styles = StyleSheet.create({
  HeaderContainer: {
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:50,
  },
  BodyContainer: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  Container: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  ContentContainer: {
    padding:5
  },
  DoubleBtnContainer: {
    width:220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  BtnContainer: {
    width: 85,
    height: 50
  },
  HeaderText: {
    color: 'black',
    fontSize: 30,
  }
})