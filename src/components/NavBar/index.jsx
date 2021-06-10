import { useContext } from 'react';
import axios from 'axios';
import UserInfos from '../../contexts/UserInfos';
import SNavBar from './style';

export default function NavBar() {
  const { userInfos, setUserInfos } = useContext(UserInfos);

  const getUsersInfos = () => {
    axios.get('http://localhost:5050/api/users/1').then(({ data }) => {
      setUserInfos(data);
    });
  };

  return (
    <SNavBar>
      {!userInfos ? (
        <button type="button" onClick={getUsersInfos}>
          connection
        </button>
      ) : (
        <>
          <p>{`Bonjour, ${userInfos.firstname} !`}</p>
          <button
            type="button"
            onClick={() => {
              setUserInfos(null);
            }}
          >
            deconnection
          </button>{' '}
        </>
      )}
    </SNavBar>
  );
}
