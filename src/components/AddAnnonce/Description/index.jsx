import Proptypes from 'prop-types';

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
    <>
      <p>Adress:</p>
      <input type="text" value={inputAdress} onChange={handleChangeAdress} />
      <p>City</p>
      <input type="text" value={inputCity} onChange={handleChangeCity} />
      <p>Describe</p>
      <input
        type="text"
        value={inputDescribe}
        onChange={handleChangeDescribe}
      />
    </>
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
