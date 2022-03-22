import { bottomTabHeight, fullScreen } from '@src/navigation/constant';
import React, { Fragment, ReactElement } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import HidingBtn from '../molecule/HidingBtn';

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
          <View key={index} style={
            index%2===0
            ?[styles.ItemContainer, {backgroundColor:'yellow'}]
            :[styles.ItemContainer, {backgroundColor: 'skyblue'}]
          } >
            {item}
          </View>
        )}
        ListFooterComponent={
          <View style={[styles.ItemContainer, {height:50}]} ></View>
        }
      />
    </View>
    <View style={styles.ButtonContainer}>
      {/* <CreateDeckBtn /> */}
      <HidingBtn size={40} color="black" />
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
    flex:1,
  },
  ItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  ButtonContainer: {
    position:'absolute',
    bottom: bottomTabHeight - 5,
    left: 5,
  }
})