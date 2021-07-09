import axios from 'axios';
import { useEffect, useState } from 'react';
import AnnonceList from '../components/Accomodation/List';

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

  return <AnnonceList title="Toutes mes annonces" data={accomodationsData} />;
};

export default SearchAdPage;
