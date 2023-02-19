/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement, useState, type ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../../utils/paths';
import Input from '../../../components/Input/Input';
import useUserData from '../../../hooks/useUserData';
import { SupabasePaths } from '../../../utils/supabasePaths';
import getSession from '../../../hooks/getSession';

const LoginPage = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const supabasePath = SupabasePaths.signIn;
  const { postData, data } = useUserData({ email, password, supabasePath });
  const { event, session } = getSession();
  const navigate = useNavigate();

  const checkSession = (): void => {
    console.log(event, session);
  };

  useEffect(() => {
    console.log(data);
    if (event === 'SIGNED_IN') {
      navigate(paths.dashboard);
    }
  }, [postData]);

  const updateEmailInput = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setEmail(inputValue.target.value);
  };

  const updatePasswordInput = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setPassword(inputValue.target.value);
  };

  return (
    <div>
      <div>Login page</div>
      <div>
        <Input
          value={email}
          onChange={(data) => {
            updateEmailInput(data);
          }}
          placeholder="email"
        />
      </div>
      <div>
        <Input
          value={password}
          onChange={(data) => {
            updatePasswordInput(data);
          }}
          placeholder="password"
        />
      </div>
      <div>
        <button onClick={postData}>log me in</button>
      </div>
      <div>
        <button onClick={checkSession}>check session</button>
      </div>
      <div>
        <Link to={paths.registerPage}>create new account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
