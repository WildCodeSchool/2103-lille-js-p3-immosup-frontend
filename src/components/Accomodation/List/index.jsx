import PropTypes from 'prop-types';
import Accomodation from '../Display';

const AnnonceList = ({ data }) => {
  return (
    <ul>
      {data.map((accomodationData) => {
        return (
          <li>
            <Accomodation {...accomodationData} />
          </li>
        );
      })}
    </ul>
  );
};

AnnonceList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AnnonceList;
