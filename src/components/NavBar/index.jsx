import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserInfos from '../../contexts/UserInfos';
import request from '../../utilities/request';
import SNavBar from './style';

// temporary login method - waiting for authentication
export default function NavBar() {
  const { userInfos, setUserInfos } = useContext(UserInfos);

  const getUsersInfos = async () => {
    if (!userInfos) {
      try {
        const { data } = await request({
          method: 'get',
          url: '/users?id=1',
        });
        setUserInfos(data);
      } catch (err) {
        toast.error('Connexion impossible', {
          position: 'bottom-right',
          autoClose: 3000,
        });
      }
    } else {
      setUserInfos(null);
    }
  };

  return (
    <SNavBar>
      <Link to="/" className="link immosup">
        IMMO’SUP
      </Link>
      <button type="button" className="btn-connexion" onClick={getUsersInfos}>
        <img
          src="/img/icons/account_circle_black_48dp.svg"
          alt="Tableau de bord"
        />
      </button>
    </SNavBar>
  );
}
