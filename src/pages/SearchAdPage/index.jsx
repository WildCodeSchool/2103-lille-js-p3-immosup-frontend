import { useEffect, useState } from 'react';
import AnnonceList from '../../components/Accomodation/List';
import SSearchAdPage from './style';
import request from '../../utilities/request';

const SearchAdPage = () => {
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
    <SSearchAdPage>
      <AnnonceList title="Title" data={accomodationsData} />
    </SSearchAdPage>
  );
};

export default SearchAdPage;
