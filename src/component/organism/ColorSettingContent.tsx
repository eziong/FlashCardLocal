import { useSettingsContext } from '@src/context/SettingContext';
import { COLOR } from '@src/utils/styles';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleBtn from '../atom/CircleBtn';
import ColorChangeModal from '../molecule/ColorChangeModal';

export enum modalKeys {
  CardFace = "CardFace",
  CardBack = "CardBack",
  LearnBtn = "LearnBtn",
  TabBarIcon = "TabBarIcon",
  TabBarIconBackground = "TabBarIconBackground",
}

const ColorSettingContent = () => {
  const {settings:{color}, setSettings} = useSettingsContext();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [changeKey, setChangeKey] = useState<modalKeys | null>(null);

  const onPressChangeColor = (key:modalKeys, changedColor:COLOR) => {
    setSettings(prev => ({
      ...prev,
      color:{
        ...prev.color,
        [key]: changedColor,
      }
    }))
  }

  const onOpenModal = (changeKey:modalKeys) => {
    setChangeKey(changeKey);
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setChangeKey(null);
    setModalVisible(false);
  }
  

  return (
    <View style={styles.Container} >
      <View style={styles.BoxContainer} >
        <View style={styles.IndexContainer} >
          <Text>Card Face</Text>
        </View>
        <View style={styles.ColorContainer} >
          <CircleBtn 
            onPress={() => onOpenModal(modalKeys.CardFace)}
            ContainerStyle={{width:50, height:50, backgroundColor:color.CardFace}}
          />
        </View>
      </View>
      <View style={styles.BoxContainer} >
        <View style={styles.IndexContainer} >
          <Text>Card Back</Text>
        </View>
        <View style={styles.ColorContainer} >
          <CircleBtn 
            onPress={() => onOpenModal(modalKeys.CardBack)}
            ContainerStyle={{width:50, height:50, backgroundColor:color.CardBack}}
          />
        </View>
      </View>
      <View style={styles.BoxContainer} >
        <View style={styles.IndexContainer} >
          <Text>Learning Button</Text>
        </View>
        <View style={styles.ColorContainer} >
          <CircleBtn 
            onPress={() => onOpenModal(modalKeys.LearnBtn)}
            ContainerStyle={{width:50, height:50, backgroundColor:color.LearnBtn}}
          />
        </View>
      </View>
      <View style={styles.BoxContainer} >
        <View style={styles.IndexContainer} >
          <Text>TabBar Icon</Text>
        </View>
        <View style={styles.ColorContainer} >
          <CircleBtn 
            onPress={() => onOpenModal(modalKeys.TabBarIcon)}
            ContainerStyle={{width:50, height:50, backgroundColor:color.TabBarIcon}}
          />
        </View>
      </View>
      <View style={styles.BoxContainer} >
        <View style={styles.IndexContainer} >
          <Text>TabBar Background</Text>
        </View>
        <View style={styles.ColorContainer} >
          <CircleBtn 
            onPress={() => onOpenModal(modalKeys.TabBarIconBackground)}
            ContainerStyle={{width:50, height:50, backgroundColor:color.TabBarIconBackground}}
          />
        </View>
      </View>
      <ColorChangeModal 
        modalVisible={modalVisible}
        onCloseModal={onCloseModal}
        onPressChangeColor={onPressChangeColor}
        modalKey={changeKey}
      />
    </View>
  )
}

export default ColorSettingContent;

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  BoxContainer: {
    flexDirection: 'row',
    margin:5,
  },
  IndexContainer: {
    width: 80
  },
  ColorContainer: {
    width: 80
  }
})