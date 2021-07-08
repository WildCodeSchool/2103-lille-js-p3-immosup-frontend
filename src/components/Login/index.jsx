import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SLogin from './style';
import request from '../../utilities/request';
import UserInfos from '../../contexts/UserInfos';

export default function Login() {
  const { setUserInfos, setUserToken } = useContext(UserInfos);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    request({ method: 'post', url: '/auth/login', data: fields }).then(
      ({ data }) => {
        setUserInfos(data.user);
        setUserToken(data.token);
      }
    );
  };

  return (
    <>
      <SLogin>
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
            />
            <p>Mot de passe</p>
            <input
              type="password"
              name="password"
              value={fields.password}
              onChange={handleChange}
            />
            <div className="boxButton">
              <Link to="/signup">Créer un compte</Link>
              <button type="submit">Connection</button>
            </div>
          </form>
        </div>
      </SLogin>
    </>
  );
}
