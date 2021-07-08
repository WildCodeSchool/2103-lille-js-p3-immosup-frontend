import PropTypes from 'prop-types';
import SThumbnail from './style';

// const pictures = ['https://s2.dmcdn.net/v/8H4G_1TQjB7PgdZ71/x720'];
// const district = 'Lille Sud';
// const city = 'Lille';
// const furnished = true;
// const rent = 732;
// const surface = 67.3;
// const animals = false;
// const rooms = 2;
// const energyClass = 'B';
// const property = 'Maison';

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
