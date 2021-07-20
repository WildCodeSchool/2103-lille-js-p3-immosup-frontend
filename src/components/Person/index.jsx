import PropTypes from 'prop-types';
import SPerson from './style';

function Person({ lastname, firstname, city, avatarUrl, birthday }) {
  return (
    <SPerson>
      <div>
        <div className="icons">
          <h2>
            {lastname} {firstname}
          </h2>
          <img src={avatarUrl} alt="" />
          <p>
            {Math.floor(
              (new Date() - new Date(birthday).getTime()) / 3.15576e10
            )}
          </p>
          <p>{city}</p>
        </div>
      </div>
    </SPerson>
  );
}

Person.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
};

export default Person;
