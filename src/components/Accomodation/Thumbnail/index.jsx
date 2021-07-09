import PropTypes from 'prop-types';
import SThumbnail from './style';

const Thumbnail = ({
  pictures = [],
  district,
  city,
  furnished,
  rent,
  surface,
  animals,
  rooms,
  energyClass,
  property,
}) => {
  return (
    <SThumbnail>
      <h2>Recherche de logement</h2>
      <div className="container">
        <div className="thumbnail">
          {pictures.map((picture) => {
            return (
              <img src={picture} alt="img accomodation" className="picture" />
            );
          })}
          <div className="information">
            <h3>{city}</h3>
            <p>Quartier {district}</p>
            <p>{property}</p>
            <p>{furnished}</p>
            <p>Surface {surface} m²</p>
            <p>{rooms} chambres</p>
            <p>{animals}</p>
            <p>Class energie {energyClass}</p>
            <p className="rent">{rent} €</p>
          </div>
        </div>
      </div>
    </SThumbnail>
  );
};

Thumbnail.propTypes = {
  district: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  furnished: PropTypes.bool.isRequired,
  rent: PropTypes.number.isRequired,
  surface: PropTypes.number.isRequired,
  animals: PropTypes.bool.isRequired,
  rooms: PropTypes.number.isRequired,
  energyClass: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};

export default Thumbnail;
