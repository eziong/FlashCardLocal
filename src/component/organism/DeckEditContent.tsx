import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { fullScreen } from '@src/navigation/constant';
import { getEveryCardIdsInDeck, updateDeck } from '@src/utils/deck';
import React, { Fragment, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Modal, View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import SquareBtn from '../atom/SquareBtn';
import AddCardBtn from '../molecule/AddCardBtn';
import CardItemPreview from '../molecule/CardItemPreview';
import DeckInputBox from '../molecule/DeckInputBox';
import HeaderText from '../molecule/HeaderText';

const DeckEditContent = ({
  id,
  name,
  description
}:{
  id: string,
  name: string,
  description: string,
}) => {
  const [localName, setLocalName] = useState<string>(name);
  const [localDescription, setLocalDescription] = useState<string>(description)
  const [cardIds, setCardIds] = useState<string[]>([]);

  const navigation = useTypeStackNavigation();
  
  useEffect(() => {
    getEveryCardIdsInDeck(id)
    .then((cardIdArray) => setCardIds(cardIdArray));
  },[id])

  const onPressConfirm = () => {
    if(localName.length === 0) return;
    updateDeck(id, localName, localDescription)
    .then(() => {
      navigation.navigate('DeckMainScreen');
    })
  }
  const Header = ({index}:{index:number}) => {
    switch(index){
      case 0:{
        return <HeaderText text={`Deck Informaion 1/2`}/>
      }
      case 1:{
        return <HeaderText text={`Cards in the deck 2/2`} />
      }
      default:{
        return <HeaderText text={`Edit the deck ${index+1}/2`} />
      }
    }
  }
  
  const renderItems = [
    (
      <View style={styles.ContentContainer} >
        <DeckInputBox 
          deckName={localName}
          setDeckName={setLocalName}
          deckDescription={localDescription}
          setDeckDescription={setLocalDescription}
        />
      </View>
    ),
    (
      <View style={styles.ContentContainer} >
        {cardIds.length === 0
        ? (
          <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom: 120}} >
            <Text>no card in this deck</Text>
          </View>
        )
        : (
          <FlatList
            data={cardIds ? cardIds : []}
            renderItem={({item, index}) => (
              <Fragment key={index}>
                <CardItemPreview 
                  cardId={item}
                  index={index}
                />
              </Fragment>
            )}
            ListFooterComponent={(
              <View style={{height:80}}></View>
            )}
          />
        )
        }
      </View>
    )
  ]
  
  return (
    <View style={styles.Container} >
      <SwiperFlatList 
        showPagination
        paginationActiveColor='green'
        data={renderItems}
        renderItem={({item, index}) => (
          <View style={styles.Container} >
            <Header index={index} />
            {item}
            {
              index === 1
              ? (<AddCardBtn deckId={id} setCardIds={setCardIds} />)
              : (null)
            }
          </View>
        )}
      />
      <View style={styles.FooterContainer} >
        <SquareBtn 
          ContainerStyle={styles.BtnContainer}
          ContentStyle={{name:'save', size: 30, color: 'black'}}
          onPress={onPressConfirm}
        />
      </View>
    </View>
  )
}

export default DeckEditContent;

const styles =StyleSheet.create({
  Container: {
    width: fullScreen()[1],
    height: fullScreen()[0],
    alignItems:'center',
  },
  ContentContainer: {
    width: fullScreen()[1],
    height: fullScreen(0.7)[0],
    justifyContent:'center',
    alignItems:'center',
  },
  HeaderContainer: {
    height: fullScreen(0.1)[0],
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  FooterContainer: {
    width: "100%",
    height:fullScreen(0.2)[0],
    alignItems: 'center',
  },
  BtnContainer: {
    width: 80,
    height: 50,
  }
})