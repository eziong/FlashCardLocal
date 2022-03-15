import { loadAsyncStorage } from '@src/utils/db';
import React, { useEffect, useState } from 'react';

const useLoadAsyncStorage = (key:string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    loadAsyncStorage(key)
    .then(([success, _data]) => {
      if(success) setData(_data);
      setIsLoading(false);
    })
  },[])

  return [data, isLoading];
}

export default useLoadAsyncStorage;