import Proptypes from 'prop-types';
import SDescription from './style';

const Description = ({
  setAdress,
  setCity,
  setDescribe,
  setRent,
  inputAdress,
  inputCity,
  inputDescribe,
  inputRent,
}) => {
  const handleChangeAdress = (evt) => {
    setAdress(evt.target.value);
  };
  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
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
          <div className="adress">
            <h2>Adresse :</h2>
            <input
              type="text"
              value={inputAdress}
              onChange={handleChangeAdress}
            />
          </div>
          <div className="city">
            <h2>Ville :</h2>
            <input type="text" value={inputCity} onChange={handleChangeCity} />
          </div>
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
  setAdress: Proptypes.func,
  setCity: Proptypes.func,
  setDescribe: Proptypes.func,
  setRent: Proptypes.func,
  inputAdress: Proptypes.string,
  inputCity: Proptypes.string,
  inputDescribe: Proptypes.string,
  inputRent: Proptypes.number,
};
Description.defaultProps = {
  inputAdress: '',
  inputCity: '',
  inputDescribe: '',
  setAdress: () => {},
  setCity: () => {},
  setDescribe: () => {},
  inputRent: 0,
  setRent: () => {},
};
