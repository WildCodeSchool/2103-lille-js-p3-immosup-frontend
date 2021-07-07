import PropTypes from 'prop-types';
import SAccomodation from './style';

// const pictures = [
//   'https://s2.dmcdn.net/v/8H4G_1TQjB7PgdZ71/x720',
//   'https://s2.dmcdn.net/v/8H4G_1TQjB7PgdZ71/x720',
// ];
// const district = 'Lille Sud';
// const city = 'Lille';
// const furnished = true;
// const rent = 732;
// const surface = 67.3;
// const animals = false;
// const title = null;
// const rooms = 2;
// const energyClass = 'B';
// const property = 'Maison';
// const description =
//   "Dans un cadre verdoyant en plein coeur d'un quartier en plein essort culturel, retrouvez une charmante petite maisonnée de presque 70m² à à peine 15 minutes du métro Porte des Postes.";

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
        <div>
          {pictures.map((picture) => {
            return (
              <img src={picture} alt="img accomodation" className="picture" />
            );
          })}
        </div>
        <div className="informations">
          <div className="criteria">
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
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="buttons">
          <div className="button">Sauvegarder</div>
          <div className="button">Contacter</div>
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
