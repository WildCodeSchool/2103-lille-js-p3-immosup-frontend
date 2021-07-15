import PropTypes from 'prop-types';
import Thumbnail from '../Thumbnail';
import SList from './style';

const AnnonceList = ({ title, data }) => {
  return (
    <SList>
      <h2>{title}</h2>
      <ul>
        {data.map((accomodationData) => {
          return (
            <li>
              <Thumbnail {...accomodationData} />
            </li>
          );
        })}
      </ul>
    </SList>
  );
};

AnnonceList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
};

export default AnnonceList;
