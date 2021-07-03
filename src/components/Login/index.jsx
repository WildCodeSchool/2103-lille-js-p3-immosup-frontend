import { useState, useContext } from 'react';
import SLogin from './style';
import request from '../../utilities/request';
import UserInfos from '../../contexts/UserInfos';

export default function Login() {
  const { setUserInfos } = useContext(UserInfos);

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const newFields = { ...fields };
    newFields[name] = value;
    setFields(newFields);
  };

  const handleSubmit = () => {
    request({ method: 'post', url: '/auth/login', data: fields }).then(
      ({ data }) => {
        setUserInfos(data);
      }
    );
  };

  return (
    <>
      <SLogin>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={fields.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </SLogin>
    </>
  );
}
