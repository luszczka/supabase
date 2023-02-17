import { paths } from '../../../utils/paths';
import { type ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = (): ReactElement => {
  const status = 'auth';
  if (status === 'anon') {
    return <Navigate replace to={paths.loginPage} />;
  }

  return <Outlet />;
};

export default Protected;
