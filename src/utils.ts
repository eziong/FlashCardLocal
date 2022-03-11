import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { AsyncType } from './type';

export const generateDBTableName = (asyncType:AsyncType) => {
  return `${asyncType}://${uuid.v4()}`;
}

export const getDBTableIndexKeys = (asyncType:AsyncType) => {
  return loadAsyncStorage(asyncType)
}

export const addDBTableIndexKeys = (asyncType:AsyncType, key:string) => {
  return getDBTableIndexKeys(asyncType)
  .then(([success, data]) => saveAsyncStorage(asyncType, data ? [...data, key] : [key]))
}

export const loadAsyncStorage = async(key:string) => {
  try{
    const stringfyData = await AsyncStorage.getItem(key);
    const data = stringfyData ? JSON.parse(stringfyData) : null;
    return [true, data];
  }catch{
    return [false, null];
  }
}

export const saveAsyncStorage = async(key:string, value:any) => {
  try{
    const stringfyValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringfyValue)
    return true;
  }catch{
    return false;
  }
}

export const deleteAsyncStorate = async(key:string) => {
  try{
    await AsyncStorage.removeItem(key);
    return true;
  }catch{
    return false;
  }
}