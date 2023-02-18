import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { type UserLogOut } from '../dataTypes/UserLogOut';

const useSignOut = (): UserLogOut => {
  const [error, setError] = useState<any>();

  const signOut = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    setError(error);
  };

  useEffect(() => {
    void signOut();
  }, []);
  return { error, signOut };
};

export default useSignOut;
