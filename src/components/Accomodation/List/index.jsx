import PropTypes from 'prop-types';
import Thumbnail from '../Thumbnail';

const AnnonceList = ({ title, data }) => {
  return (
    <>
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
    </>
  );
};

AnnonceList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
};

export default AnnonceList;
