import { type Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
export interface SessionType {
  session: Session | null;
}

const useSessionProvider = (): SessionType => {
  const [value, setValue] = useState<Session | null>(null);

  const getSession = async (): Promise<void> => {
    try {
      const data = await supabase.auth.getSession();
      setValue(data.data.session);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    void getSession();
    supabase.auth.onAuthStateChange((_, session) => {
      setValue(session);
    });
  }, [supabase]);

  return { session: value };
};

export default useSessionProvider;
