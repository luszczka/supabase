import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { type NoResponseDataType, type ResponseDataType, type UseUserDataType } from '../dataTypes/UserDataTypes';
import { type SupabasePaths } from '../utils/supabasePaths';

export interface UseSessionServiceType {
  data: ResponseDataType | NoResponseDataType | null;
  error: any;
  sessionService: () => Promise<void>;
}

const useSessionService = (): UseSessionServiceType => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  console.log('Kocham cie!!!');
  const sessionService = async (): Promise<void> => {
    const { data, error } = await supabase.auth.getSession();
    setError(error);
    setData(data);
  };

  useEffect(() => {
    void sessionService();
  }, []);
  return { data, error, sessionService };
};

export default useSessionService;
