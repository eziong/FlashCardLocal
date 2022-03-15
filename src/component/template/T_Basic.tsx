import { fullScreen } from '@src/navigation/constant';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const T_Basic = ({
  Body,
  bottomTabBarHeight,
}:{
  Body:ReactElement,
  bottomTabBarHeight?:number,
}) => (
  <View style={
    bottomTabBarHeight
    ? [styles.Container, {height: fullScreen()[0] - bottomTabBarHeight}]
    : [styles.Container, {height: fullScreen()[0]}]
  } >
    <View style={styles.Body} >
      {Body}
    </View>
  </View>
)

export default T_Basic;

const styles = StyleSheet.create({
  Container:{
    width: fullScreen()[1],
    backgroundColor:'yellow'
  },
  Header:{

  },
  Body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Footer:{

  }
})