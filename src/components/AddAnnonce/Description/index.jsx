import { useState } from 'react';
import Proptypes from 'prop-types';
import SDescription from './style';

const Description = ({
  setDistrict,
  setCity,
  setDescribe,
  setRent,
  inputDistrict,
  inputCity,
  inputDescribe,
  inputRent,
}) => {
  const [isLille, setIsLille] = useState(false);

  const handleChangeDistrict = (evt) => {
    setDistrict(evt.target.value);
  };
  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
    if (evt.target.value === 'Lille') {
      setIsLille(true);
    } else {
      setIsLille(false);
    }
  };
  const handleChangeDescribe = (evt) => {
    setDescribe(evt.target.value);
  };
  const handleChangeRent = (evt) => {
    setRent(evt.target.value);
  };

  return (
    <SDescription>
      <div className="partContainer">
        <div className="addressCity">
          <div className="city">
            <h2>Ville :</h2>
            <select type="text" value={inputCity} onChange={handleChangeCity}>
              <option value="Lille">Lille</option>
              <option value="La Madeleine">La Madeleine</option>
              <option value="Lambersart">Lambersart</option>
              <option value="St André">St André</option>
              <option value="Lomme">Lomme</option>
              <option value="Marcq en Baroeul">Marcq en Baroeul</option>
              <option value="Mons en Baroeul">Mons en Baroeul</option>
              <option value="Hellemmes">Hellemmes</option>
              <option value="Ronchin">Ronchin</option>
              <option value="Loos">Loos</option>
              <option value="Faches-Thumesnil ">Faches-Thumesnil </option>
            </select>
          </div>
          {isLille && (
            <div className="adress">
              <h2>Quartier :</h2>
              <select value={inputDistrict} onChange={handleChangeDistrict}>
                <option selected value="">
                  {' '}
                </option>
                <option value="toute la ville">toute la ville</option>
                <option value="centre">Centre</option>
                <option value="Wazemmes">Wazemmes</option>
                <option value="Moulins">Moulins</option>
                <option value="Vieux-Lille">Vieux-Lille</option>
                <option value="Fives">Fives</option>
                <option value="Vauban">Vauban</option>
                <option value="Sud">Sud</option>
                <option value="Saint Maurice">Saint Maurice</option>
                <option value="Bois Blanc">Bois Blanc</option>
              </select>
            </div>
          )}
          <div className="rent">
            <h2>Prix :</h2>
            <input
              type="number"
              value={inputRent}
              onChange={handleChangeRent}
            />
          </div>
        </div>

        <h2>Description de l&apos;annonce :</h2>
        <textarea value={inputDescribe} onChange={handleChangeDescribe} />
        <div className="navButton">
          <button type="button" className="return">
            Précédent
          </button>
          <button type="button" className="continue">
            Continuer
          </button>
        </div>
      </div>
    </SDescription>
  );
};

export default Description;

Description.propTypes = {
  setDistrict: Proptypes.func.isRequired,
  setCity: Proptypes.func.isRequired,
  setDescribe: Proptypes.func.isRequired,
  setRent: Proptypes.func.isRequired,
  inputDistrict: Proptypes.string.isRequired,
  inputCity: Proptypes.string.isRequired,
  inputDescribe: Proptypes.string.isRequired,
  inputRent: Proptypes.number.isRequired,
};
