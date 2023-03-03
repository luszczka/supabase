import { useState } from 'react';
import { supabase } from '../client';

const useMyProfile = (): any => {
  const [data, setData] = useState<any>(null);

  const getData = async (): Promise<void> => {
    const { data: profile } = await supabase.from('profiles').select('id, username, avatar_url, website');

    setData(profile);
  };

  return { data, getData };
};

export default useMyProfile;
