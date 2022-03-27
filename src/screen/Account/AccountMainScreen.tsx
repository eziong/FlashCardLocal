import SquareBtnIon from '@src/component/atom/SquareBtnIon';
import T_Basic from '@src/component/template/T_Basic';
import useBottomTabVisible from '@src/hook/useBottomTabVisible';
import useTypeStackNavigation from '@src/hook/useTypeStackNavigation';
import { bottomTabHeight } from '@src/navigation/constant';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AccountMainScreen = () => {
  useBottomTabVisible();

  const navigation = useTypeStackNavigation();

  const onPressProfile = () => {
    navigation.navigate('ProfileScreen');
  }

  const onPressColorSetting = () => {
    navigation.navigate('ColorSettingScreen');
  }

  const onPressGettingReady = () => {
    navigation.navigate('GettingReadyScreen');
  }

  return(
    <T_Basic 
      Body={(
        <View style={styles.Container} >
          <View>
            <SquareBtnIon 
              ContainerStyle={styles.ProfileContainer}
              ContentStyle={{name:'person-outline', size: 40, color:'black'}}
              onPress={onPressProfile}
            />
          </View>
          <View style={styles.RowContainer}>
            <SquareBtnIon 
              ContainerStyle={styles.ItemContainer}
              ContentStyle={{name:'color-palette-outline', size: 40, color:'black'}}
              onPress={onPressColorSetting}
            />
            <SquareBtnIon 
              ContainerStyle={styles.ItemContainer}
              ContentStyle={{name:'question', size: 40, color:'black'}}
              onPress={onPressGettingReady}
            />
          </View>
        </View>
      )}
      bottomTabBarHeight={bottomTabHeight}
    />
  )
}

export default AccountMainScreen;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  RowContainer: {
    flexDirection: 'row',
  },
  ProfileContainer: {
    width: 220,
    height: 100
  },
  ItemContainer: {
    width: 100,
    height:100,
    margin: 10,
  },
})