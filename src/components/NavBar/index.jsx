import { useEffect, useContext } from 'react';
import UserInfos from '../../contexts/UserInfos';
import sendRequest from '../../utilities/sendRequest';
import SNavBar from './style';

export default function NavBar() {
  const { userInfos, setUserInfos } = useContext(UserInfos);

  const getUsersInfos = async () => {
    try {
      const data = await sendRequest({
        method: 'get',
        url: '/users?id=1',
      });
      setUserInfos(data);
    } catch (err) {
      console.log(err);
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
