import { fullScreen } from '@src/navigation/constant';
import React, { Fragment, ReactElement } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import HeaderText from '../molecule/HeaderText';

const T_DeckView = ({
  elements
}:{
  elements: ReactElement[]
}) => (
  <View style={styles.Container} >
    <View style={styles.HeaderContainer} >
      <HeaderText text='Select a deck to learn' />
    </View>
    <View style={styles.BodyContainer} >
      <FlatList 
        data={elements}
        renderItem={({item, index}) => (
          <View key={index} style={
            index%2===0
            ?([styles.ItemContainer, {backgroundColor:'rgba(255,255,196,0.4)'}])
            :([styles.ItemContainer, {backgroundColor: 'rgba(196,255,196,0.4)'}])
          } >
            {item}
          </View>
        )}
      />
    </View>
  </View>
)

export default T_DeckView;

const styles = StyleSheet.create({
  Container: {
    height:fullScreen()[0],
    width: fullScreen(0.95)[1],
  },
  HeaderContainer: {
    height:fullScreen(0.08)[0],
    justifyContent: 'center',
    alignItems: 'center',
  },
  BodyContainer: {
    height:fullScreen(0.85)[0],
  },
  ItemContainer: {
    borderRadius: 10,
  }
})