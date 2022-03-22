import { fullScreen } from '@src/navigation/constant';
import React, { Fragment, ReactElement } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CreateDeckBtn from '../molecule/CreateDeckBtn';

const T_DeckManage = ({
  elements
}:{
  elements: ReactElement[]
}) => (
  <View style={styles.Container} >
    <View style={styles.FlatlistContainer} >
      <FlatList
        data={elements}
        renderItem={({item, index}) => (
          <Fragment key={index} >
            {item}
          </Fragment>
        )}
      />
    </View>
    <View style={styles.ButtonContainer}>
      <CreateDeckBtn />
    </View>
  </View>
)

export default T_DeckManage;

const styles = StyleSheet.create({
  Container:{
    width:"100%",
    height: "100%",
  },
  FlatlistContainer: {
    flex:1
  },
  ButtonContainer: {
    width: "100%",
  }
})