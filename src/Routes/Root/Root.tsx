import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const Root = (): ReactElement => {
  const status = 'auth';

  if (status === 'loading') {
    return <div>loading</div>;
  }

  return <Outlet />;
};

export default Root;
