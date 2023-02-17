import { useState, useEffect } from 'react';
import { supabase } from '../client';

interface Props {
  email: string;
  password: string;
}

interface SignInType {
  data: any;
  signIn: () => Promise<void>;
}

const useSignIn = ({ email, password }: Props): SignInType => {
  const [data, setData] = useState<any>();

  const signIn = async (): Promise<void> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setData(data);
  };

  useEffect(() => {
    void signIn();
  }, []);
  return { data, signIn };
};

export default useSignIn;
