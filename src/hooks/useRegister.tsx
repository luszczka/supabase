import { useState, useEffect } from 'react';
import { supabase } from '../client';

interface Props {
  email: string;
  password: string;
}

interface SignInType {
  data: any;
  register: () => Promise<void>;
}

const useRegister = ({ email, password }: Props): SignInType => {
  const [data, setData] = useState<any>();

  const register = async (): Promise<void> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setData(data);
  };

  useEffect(() => {
    void register();
  }, []);
  return { data, register };
};

export default useRegister;
