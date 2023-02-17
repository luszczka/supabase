import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../../../utils/paths';

const Dashboard = (): ReactElement => {
  return (
    <div>
      <div>Dashboard</div>
      <Link to={paths.loginPage}>log out</Link>
    </div>
  );
};

export default Dashboard;
