import { Deck, AsyncType, Card } from '@src/type';
import { generateDBTableName } from '@src/utils';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const T_DeckCreate = ({
  Header,
  data,
  Footer,
}:{
  Header: JSX.Element,
  data: Card[],
  Footer: JSX.Element,
}) => (
  <KeyboardAwareFlatList 
    style={styles.Container}
    ListHeaderComponent={Header}
    ListFooterComponent={Footer}
    data={data}
    renderItem={({item, index}) => (
      <View>
        <Text>hihi</Text>
      </View>
    )}
  />
)

export default T_DeckCreate;

const styles = StyleSheet.create({
  Container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 50,
  },
  FlatListContainer: {
    flex: 6
  },
  ButtonContainer: {
    flex: 1
  }
})