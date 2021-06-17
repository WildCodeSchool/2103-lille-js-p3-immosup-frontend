import { useEffect, useContext } from 'react';
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

  useEffect(() => {
    getUsersInfos();
  }, []);

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
          </button>
        </>
      )}
      {/* import { Link } from 'react-router-dom';
import SNavBar from './style';

export default function NavBar() {
  return (
    <SNavBar>
      <Link to="/" className="link immosup">
        IMMO’SUP
      </Link>
      <Link to="/tenant/dashboard" className="link TenantDashboard">
        <img
          src="/img/icons/account_circle_black_48dp.svg"
          alt="Tableau de bord"
        />
      </Link> */}
    </SNavBar>
  );
}
