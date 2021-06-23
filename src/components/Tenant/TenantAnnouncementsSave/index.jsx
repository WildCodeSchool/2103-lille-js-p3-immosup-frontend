import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import UserInfos from '../../../contexts/UserInfos';

export default function TenantAnnouncementsSave() {
  const [fav, setFav] = useState([]);
  const { userInfos } = useContext(UserInfos);

  useEffect(() => {
    if (userInfos) {
      axios
        .get(`http://localhost:5050/api/favorites/${userInfos.id}`)
        .then(({ data }) => {
          setFav(data);
        });
    }
  }, [userInfos]);
  return (
    <div>
      <h1>AnnouncementsSave</h1>
      {userInfos && (
        <div>
          {fav.map((toto) => {
            return (
              <div>
                <p>
                  {toto.title}
                  <br />
                  {toto.rent}€<br />
                  {toto.district}
                  <br />
                  {toto.description}
                  <br />
                </p>
                <img src={`${toto.url}`} alt="imgAccomodation" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
