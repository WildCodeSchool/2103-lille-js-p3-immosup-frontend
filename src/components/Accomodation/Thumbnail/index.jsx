import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SThumbnail from './style';

const Thumbnail = ({
  id,
  pictures = [],
  district,
  city,
  rent,
  surface,
  rooms,
  property,
}) => {
  return (
    <SThumbnail>
      <Link to={`/accomodations/${id}`}>
        <div className="thumbnail">
          {pictures.map((picture) => {
            return (
              <img src={picture} alt="img accomodation" className="picture" />
            );
          })}
          <div className="information">
            <h3>{city}</h3>
            <p>{district}</p>
            <p>{property}</p>
            <p>Surface {surface} m²</p>
            <p>{rooms} chambres</p>
            <p className="rent">{rent} €</p>
          </div>
        </div>
      </Link>
    </SThumbnail>
  );
};

Thumbnail.propTypes = {
  district: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rent: PropTypes.number.isRequired,
  surface: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  property: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Thumbnail;
