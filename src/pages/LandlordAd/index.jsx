import { useEffect, useState, useContext } from 'react';
import AnnonceList from '../../components/Accomodation/List';
import User from '../../contexts/UserInfos';
// import SSearchAdPage from './style';
import { request } from '../../utilities';

const SearchAdPage = () => {
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

  return (
    // <SSearchAdPage>
    <AnnonceList title="Title" data={accomodationsData} />
    // </SSearchAdPage>
  );
};

export default SearchAdPage;
