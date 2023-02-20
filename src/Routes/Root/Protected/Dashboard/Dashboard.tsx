/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement } from 'react';
import useSignOut from '../../../../hooks/useSignOut';

const Dashboard = (): ReactElement => {
  const { signOut } = useSignOut();

  return (
    <div>
      <div>Dashboard</div>
      <button onClick={signOut}>log me out</button>
    </div>
  );
};

export default Dashboard;
