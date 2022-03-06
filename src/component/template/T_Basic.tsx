import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

const T_Basic = ({
  Body
}:{
  Body:ReactElement
}) => {
  return (
    <View style={styles.Container} >
      <View style={styles.Body} >
        {Body}
      </View>
    </View>
  )
}

export default T_Basic;

const styles = StyleSheet.create({
  Container:{
    flex:1
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