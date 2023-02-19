import { useEffect, useState } from 'react';
import { supabase } from '../client';

export interface SessionType {
  event: any;
  session: any;
  sessionDetails: () => Promise<void>;
}

const getSession = (): SessionType => {
  const [event, setEvent] = useState<any>();
  const [session, setSession] = useState<any>();

  const sessionDetails = async (): Promise<void> => {
    supabase.auth.onAuthStateChange((event, session) => {
      setEvent(event);
      setSession(session);
    });
  };

  useEffect(() => {
    void sessionDetails();
  }, []);
  return { event, session, sessionDetails };
};

export default getSession;
