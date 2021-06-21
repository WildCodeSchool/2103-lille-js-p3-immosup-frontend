import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import UserInfos from '../../contexts/UserInfos';
import request from '../../utilities/request';
import SNavBar from './style';

export default function NavBar() {
  const { userInfos, setUserInfos } = useContext(UserInfos);

  const getUsersInfos = async () => {
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
    </SNavBar>
  );
}
