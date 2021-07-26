import PropTypes from 'prop-types';
import PersonMatch from '../PersonMatch';
import SPersonsGallery from './style';

function PersonsGallery({ persons }) {
  return (
    <SPersonsGallery>
      <h3>Mes matchs</h3>
      <div className="Gallery">
        {persons
          .filter((person, index) => {
            return index > 0 && index <= 8;
          })
          .map((person) => {
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
