import PropTypes from 'prop-types';
import Person from '../Person/index';
import SPersonsGallery from './style';

function PersonsGallery({ persons }) {
  return (
    <SPersonsGallery>
      <div className="Gallery">
        {persons.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </div>
    </SPersonsGallery>
  );
}
PersonsGallery.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PersonsGallery;
