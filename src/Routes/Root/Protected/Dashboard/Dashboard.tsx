/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement } from 'react';
import useSignOut from '../../../../hooks/useSignOut';
import { isAdmin } from '../../../../utils/isAdmin';

const Dashboard = (): ReactElement => {
  const { signOut } = useSignOut();
  const admin = isAdmin();

  return (
    <div>
      <div>Dashboard</div>
      {admin && <div>jestes adminem</div>}
      <button onClick={signOut}>log me out</button>
    </div>
  );
};

export default Dashboard;
