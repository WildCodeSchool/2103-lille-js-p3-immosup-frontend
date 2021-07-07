import PropTypes from 'prop-types';
import SPerson from './style';

function Person({ name, firstname, city, url }) {
  return (
    <SPerson>
      <div>
        <li>
          <h3>
            {name} {firstname}
          </h3>
          <img src={url} alt="" />
          <p>{city}</p>
        </li>
      </div>
    </SPerson>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Person;
