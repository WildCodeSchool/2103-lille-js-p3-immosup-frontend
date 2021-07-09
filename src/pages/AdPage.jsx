import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accomodation from '../components/Accomodation/Display';

const AdPage = () => {
  const { id } = useParams();
  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/annonce/${id}`).then(({ data }) => {
      const newData = {
        ...data,
        pictures: data.photos?.split(',').slice(0, 1),
      };

      setData(newData);
    });
  }, []);

  return <Accomodation {...accomodationData} />;
};

export default AdPage;
