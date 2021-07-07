import { useEffect, useState } from 'react';
import PersonsGallery from '../PersonsGallery';
import request from '../../utilities/request';

const RandomPage = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    request({
      method: 'get',
      url: '/users',
    }).then(({ data }) => {
      setTest(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <PersonsGallery persons={test} />
    </>
  );
};
export default RandomPage;
