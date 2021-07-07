import PropTypes from 'prop-types';
import Person from '../Person/index';

function PersonsGallery({ persons }) {
  return (
    <>
      <ul>
        {persons.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </ul>
    </>
  );
}
PersonsGallery.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PersonsGallery;
