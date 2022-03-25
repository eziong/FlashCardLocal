import { fullScreen } from '@src/navigation/constant';
import { Deck } from '@src/type';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeckViewContent = ({
  deck
}:{
  deck:Deck
}) => {
  return (
    <View style={styles.Container} >
      <View style={styles.ContentContainer} >
        <View style={styles.IndexTextContainer} >
          <Text style={styles.IndexText} >
            Name
          </Text>
        </View>
        <View style={styles.NameTextContainer} >
          <Text style={styles.ContentText} >
            {deck.name}
          </Text>
        </View>
      </View>
      <View style={styles.ContentContainer} >
        <View style={styles.IndexTextContainer} >
          <Text style={styles.IndexText} >
            Description
          </Text>
        </View>
        <View style={styles.DescriptionTextContainer} >
          <Text style={styles.ContentText} >
            {deck.description}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DeckViewContent;

const styles = StyleSheet.create({
  Container: {
    height: fullScreen()[0] * 0.8,
    width: fullScreen()[1] * 0.8,
    borderRadius:10,
    borderWidth: 20,
    borderColor:'white',
    padding: 10,
  },
  ContentContainer: {
    flexDirection: 'row',
    padding: 10
  },
  IndexTextContainer:{
    width: fullScreen()[1] * 0.2
  },
  IndexText: {
    color: 'black'
  },
  NameTextContainer: {
    width: fullScreen()[1] * 0.35,
    height: 50,
    overflow: 'scroll',
  },
  DescriptionTextContainer: {
    width: fullScreen()[1] * 0.35,
    height: 130,
    overflow: 'scroll',
  },
  ContentText: {
    color: 'grey'
  }
})