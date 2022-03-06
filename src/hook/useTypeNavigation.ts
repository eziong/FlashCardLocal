import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigationName } from '@src/navigation/constant';
import React from 'react';

const useTypeNavigation = (
  stackName: StackNavigationName
) => {
  type screenProp = StackNavigationProp<ParamListBase, typeof stackName>;
  const navigation = useNavigation<screenProp>();
  return navigation;
}

export default useTypeNavigation;