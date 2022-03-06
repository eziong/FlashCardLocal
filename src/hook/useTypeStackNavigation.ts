import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

const useTypeStackNavigation = () => {
  type screenProp = StackNavigationProp<ParamListBase>;
  const navigation = useNavigation<screenProp>();
  return navigation;
}

export default useTypeStackNavigation;