import PropTypes from 'prop-types';
import SAccomodation from './style';

const Accomodation = ({
  pictures = [],
  district,
  city,
  furnished,
  rent,
  surface,
  animals,
  title,
  rooms,
  energyClass,
  property,
  description,
}) => {
  return (
    <SAccomodation>
      <h2>{title}</h2>
      <div className="container">
        <div className="img-position">
          {pictures.map((picture) => {
            return (
              <img src={picture} alt="img accomodation" className="picture" />
            );
          })}
        </div>
        <div className="informations">
          <div className="criteria">
            <h3>{city}</h3>
            <p>{district}</p>
            <p>{property}</p>
            <p>{furnished ? 'Meublé' : 'Non meublé'}</p>
            <p>Surface {surface} m²</p>
            <p>{rooms} chambres</p>
            <p>{animals ? 'Animaux accepter' : 'Animaux non accepter'}</p>
            <p>Class energie {energyClass}</p>
            <p className="rent">{rent} €</p>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </SAccomodation>
  );
};

Accomodation.propTypes = {
  district: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  furnished: PropTypes.bool.isRequired,
  rent: PropTypes.number.isRequired,
  surface: PropTypes.number.isRequired,
  animals: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  energyClass: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};

export default Accomodation;
