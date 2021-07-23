import { useEffect, useState, useContext } from 'react';
import AnnonceList from '../../components/Accomodation/List';
import User from '../../contexts/UserInfos';
import { request } from '../../utilities';

const LandlordAd = () => {
  const [accomodationsData, setData] = useState([]);

  const { userInfos } = useContext(User);

  const { id } = userInfos;

  useEffect(() => {
    request({ method: 'get', url: `/annonce/landlord/${id}` }).then(
      ({ data }) => {
        const newData = data.map((annonce) => {
          return {
            ...annonce,
            pictures: annonce.photos?.split(',').slice(0, 1),
          };
        });

        setData(newData);
      }
    );
  }, []);

  return <AnnonceList title="?" data={accomodationsData} />;
};

export default LandlordAd;
