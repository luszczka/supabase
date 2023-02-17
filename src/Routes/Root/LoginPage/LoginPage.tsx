/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement, useState, type ChangeEvent } from 'react';
import useSignIn from '../../../hooks/useSignIn';
import { Link } from 'react-router-dom';
import { paths } from '../../../utils/paths';

const LoginPage = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useSignIn({ email, password });

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
        <input
          value={email}
          onChange={(data) => {
            updateEmailInput(data);
          }}
          placeholder="email"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(data) => {
            updatePasswordInput(data);
          }}
          placeholder="password"
        />
      </div>
      <div>
        <button onClick={signIn}>log me in</button>
      </div>
      <div>
        <Link to={paths.registerPage}>create new account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
