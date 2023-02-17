/* eslint-disable @typescript-eslint/no-misused-promises */
import { type ReactElement, useState, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../../hooks/useRegister';
import { paths } from '../../../utils/paths';

const RegisterPage = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { register } = useRegister({ email, password });

  const updateEmailInput = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setEmail(inputValue.target.value);
  };

  const updatePasswordInput = (inputValue: ChangeEvent<HTMLInputElement>): void => {
    setPassword(inputValue.target.value);
  };
  return (
    <div>
      <div>Register page</div>
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
        <button onClick={register}>register</button>
      </div>
      <div>
        <Link to={paths.loginPage}>log in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
