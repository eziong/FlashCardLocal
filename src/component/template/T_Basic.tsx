import React, { ReactElement } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const T_Basic = ({
  Body
}:{
  Body:ReactElement
}) => (
  <View style={styles.Container} >
    <View style={styles.Body} >
      {Body}
    </View>
  </View>
)

export default T_Basic;

const styles = StyleSheet.create({
  Container:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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