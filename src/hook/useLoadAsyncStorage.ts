import { loadAsyncStorage } from '@src/utils/db';
import React, { useEffect, useState } from 'react';

const useLoadAsyncStorage = <T>(key:string):[T | null, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  
  useEffect(() => {
    loadAsyncStorage<T>(key)
    .then(([success, _data]) => {
      if(success) setData(_data);
      setIsLoading(false);
    })
  },[])

  return [data, isLoading];
}

export default useLoadAsyncStorage;