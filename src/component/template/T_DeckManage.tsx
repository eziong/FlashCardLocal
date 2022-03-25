import { bottomTabHeight, fullScreen } from '@src/navigation/constant';
import React, { Fragment, ReactElement } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import DeckCreateBtn from '../molecule/DeckCreateBtn';

const T_DeckManage = ({
  elements
}:{
  elements: ReactElement[]
}) => (
  <View style={styles.Container} >
      {elements.length === 0
      ?(
        <Text>no deck available</Text>
      )
      :(
        <View style={styles.FlatlistContainer} >
          <FlatList
            data={elements}
            renderItem={({item, index}) => (
              <View key={index} style={
                index%2===0
                ?[styles.ItemContainer, {backgroundColor:'rgba(255,255,196,0.4)'}]
                :[styles.ItemContainer, {backgroundColor: 'rgba(196,255,196,0.4)'}]
              } >
                {item}
              </View>
            )}
            ListFooterComponent={
              <View style={[styles.ItemContainer, {height:50}]} ></View>
            }
          />
        </View>
        )
      }
    <View style={styles.ButtonContainer}>
      <DeckCreateBtn size={40} color="black" />
    </View>
  </View>
)

export default T_DeckManage;

const styles = StyleSheet.create({
  Container:{
    width:"100%",
    height: "100%",
    justifyContent:'center',
    alignItems:'center',
  },
  FlatlistContainer: {
    flex:1,
    width:"100%",
  },
  ItemContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius:10,
  },
  ButtonContainer: {
    position:'absolute',
    bottom: bottomTabHeight - 5,
    left: 5,
  }
})