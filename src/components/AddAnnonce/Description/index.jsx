import Proptypes from 'prop-types';
import SDescription from './style';

const Description = ({
  setAdress,
  setCity,
  setDescribe,
  inputAdress,
  inputCity,
  inputDescribe,
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

  return (
    <SDescription>
      <div className="partContainer">
        <h2>Adress:</h2>
        <input type="text" value={inputAdress} onChange={handleChangeAdress} />
        <h2>City</h2>
        <input type="text" value={inputCity} onChange={handleChangeCity} />
        <h2>Describe</h2>
        <input
          type="text"
          value={inputDescribe}
          onChange={handleChangeDescribe}
        />
        <button type="button" className="continue">
          Continuer
        </button>
      </div>
    </SDescription>
  );
};

export default Description;

Description.propTypes = {
  setAdress: Proptypes.func,
  setCity: Proptypes.func,
  setDescribe: Proptypes.func,
  inputAdress: Proptypes.string,
  inputCity: Proptypes.string,
  inputDescribe: Proptypes.string,
};
Description.defaultProps = {
  inputAdress: '',
  inputCity: '',
  inputDescribe: '',
  setAdress: () => {},
  setCity: () => {},
  setDescribe: () => {},
};
