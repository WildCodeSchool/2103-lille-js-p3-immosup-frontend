import PropTypes from 'prop-types';

const AnnonceList = ({ data }) => {
  return (
    <ul>
      {data.map((accomodationData) => {
        return (
          <li>
            <div className="fakeCard" {...accomodationData}>
              TODO
            </div>
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
