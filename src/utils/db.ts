import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { AsyncType } from '../type';

export const generateKey = (asyncType:AsyncType, division?:string):string => {
  if(division){
    return `${asyncType}:/${uuid.v4()}$$${division}`;
  }
  return `${asyncType}:/${uuid.v4()}`;
}

export const loadAsyncStorage = async<T>(key:string):Promise<[boolean, T | null]> => {
  try{
    const stringfyData = await AsyncStorage.getItem(key);
    const data = stringfyData ? JSON.parse(stringfyData) : null;
    return [true, data];
  }catch{
    return [false, null];
  }
}

export const saveAsyncStorage = async<T>(key:string, value:T):Promise<boolean> => {
  try{
    const stringfyValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringfyValue)
    return true;
  }catch{
    return false;
  }
}

export const deleteAsyncStorage = async(key:string):Promise<boolean> => {
  try{
    await AsyncStorage.removeItem(key);
    return true;
  }catch{
    return false;
  }
}