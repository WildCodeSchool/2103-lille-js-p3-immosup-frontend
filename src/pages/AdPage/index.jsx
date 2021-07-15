import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accomodation from '../../components/Accomodation/Display';
import SAdPage from './style';
import request from '../../utilities/request';

const AdPage = () => {
  const { id } = useParams();
  const [accomodationData, setData] = useState([]);

  useEffect(() => {
    request({ method: 'get', url: `/annonce/${id}` }).then(({ data }) => {
      const newData = {
        ...data,
        pictures: data.photos?.split(',').slice(0, 1),
      };
      setData(newData);
    });
  }, []);

  return (
    <SAdPage>
      <Accomodation {...accomodationData} />
    </SAdPage>
  );
};

export default AdPage;
