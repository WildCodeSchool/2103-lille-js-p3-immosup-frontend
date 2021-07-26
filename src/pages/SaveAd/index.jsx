import { useEffect, useState } from 'react';
import AnnonceList from '../../components/Accomodation/List';
import SSaveAd from './style';
import { request } from '../../utilities';

const SaveAd = () => {
  const [accomodationsData, setData] = useState([]);

  useEffect(() => {
    request({ method: 'get', url: `/annonce` }).then(({ data }) => {
      const newData = data.map((annonce) => {
        return { ...annonce, pictures: annonce.photos?.split(',').slice(0, 1) };
      });

      setData(newData);
    });
  }, []);

  return (
    <SSaveAd>
      <AnnonceList title="Mes logements" data={accomodationsData} />
    </SSaveAd>
  );
};

export default SaveAd;
