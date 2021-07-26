import PropTypes from 'prop-types';
import Thumbnail from '../Thumbnail';
import SList from './style';

const AnnonceList = ({ title, data }) => {
  return (
    <SList>
      <h3>{title}</h3>
      <ul>
        {data.map((accomodationData, index) => {
          return (
            <li>
              <Thumbnail key={index.toString()} {...accomodationData} />
            </li>
          );
        })}
      </ul>
    </SList>
  );
};

AnnonceList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string,
};

AnnonceList.defaultProps = {
  title: '',
};

export default AnnonceList;
