import axios from 'axios';
import { useEffect, useState } from 'react';
import AnnonceList from '../../components/Accomodation/List';
import SSearchAdPage from './style';

const SearchAdPage = () => {
  const [accomodationsData, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/annonce').then(({ data }) => {
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
