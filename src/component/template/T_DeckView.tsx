import React, { Fragment, ReactElement } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

const T_DeckView = ({
  elements
}:{
  elements: ReactElement[]
}) => (
  <View style={styles.Container} >
    <FlatList 
      data={elements}
      renderItem={({item, index}) => (
        <Fragment key={index} >
          {item}
        </Fragment>
      )}
    />
  </View>
)

export default T_DeckView;

const styles = StyleSheet.create({
  Container: {
    width: 300,
    height: 500,
    borderWidth: 1,
  }
})