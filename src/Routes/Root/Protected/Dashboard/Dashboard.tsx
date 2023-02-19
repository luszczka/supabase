/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement, useEffect } from 'react';
import { paths } from '../../../../utils/paths';
import { useNavigate } from 'react-router-dom';
import getSession from '../../../../hooks/getSession';
import useSignOut from '../../../../hooks/useSignOut';

const Dashboard = (): ReactElement => {
  const navigate = useNavigate();
  const { event, session } = getSession();
  const { signOut } = useSignOut();

  const checkSession = (): void => {
    console.log(event, session);
  };

  useEffect(() => {
    if (event === 'SIGNED_OUT') {
      navigate(paths.loginPage);
    }
  }, [signOut]);

  return (
    <div>
      <div>Dashboard</div>
      <div>
        <button onClick={checkSession}>check session</button>
      </div>
      <button onClick={signOut}>log me out</button>
    </div>
  );
};

export default Dashboard;
