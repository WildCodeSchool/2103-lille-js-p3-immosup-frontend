import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SPersonsGallery from './style';
// import PersonMatch from '../PersonMatch/PersonMatch';

function PersonsGallery({ persons }) {
  return (
    <SPersonsGallery>
      <div className="Gallery">
        <Link to="/tenant/match">
          <h2>Mes matchs</h2>
        </Link>
        {persons.map((person) => {
          return (
            <div className="fakeBadge" {...person}>
              TODO
            </div>
          );
        })}
      </div>
    </SPersonsGallery>
  );
}
PersonsGallery.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PersonsGallery;
