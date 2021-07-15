import PropTypes from 'prop-types';
import PersonMatch from '../PersonMatch';
import SPersonsGallery from './style';
// import Person from '../Person';

function PersonsGallery({ persons }) {
  return (
    <SPersonsGallery>
      <h3>Mes matchs</h3>
      <div className="Gallery">
        {persons.map((person) => {
          return <PersonMatch key={person.id} {...person} />;
        })}
      </div>
    </SPersonsGallery>
  );
}
PersonsGallery.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PersonsGallery;
