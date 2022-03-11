import React, { Fragment, ReactElement } from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import CreateDeckBtn from '../molecule/CreateDeckBtn';

const T_DeckManage = ({
  elements
}:{
  elements: ReactElement[]
}) => (
  <KeyboardAwareFlatList 
    style={styles.Container}
    ListHeaderComponent={(<View></View>)}
    ListFooterComponent={(
    <View style={styles.ButtonContainer} >
      <CreateDeckBtn />
    </View>
    )}
    data={elements}
    renderItem={({item, index}) => (
      <Fragment key={index} >
        {item}
      </Fragment>
    )}
  />
)

export default T_DeckManage;

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