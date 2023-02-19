import { paths } from '../../utils/paths';
import { type ReactElement, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import useSessionService from '../../hooks/useSessionService';

const Root = (): ReactElement => {
  const navigate = useNavigate();
  const { data } = useSessionService();

  useEffect(() => {
    if (!data) {
      navigate(paths.loginPage);
    }
    if (data) {
      navigate(paths.dashboard);
    }
  }, []);

  return <Outlet />;
};

export default Root;
