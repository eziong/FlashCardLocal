import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const useTypeTabNavigation = () => {
  type screenProp = BottomTabNavigationProp<ParamListBase>;
  const navigation = useNavigation<screenProp>();
  return navigation.getParent();
}

export default useTypeTabNavigation;