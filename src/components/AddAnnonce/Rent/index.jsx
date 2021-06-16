import PropTypes from 'prop-types';
import SRent from './style';

const Rent = ({ setRent, inputRent }) => {
  const handleChangeRent = (evt) => {
    setRent(evt.target.value);
  };

  return (
    <SRent>
      <div className="partContainer">
        <h2>Rent</h2>
        <input type="text" value={inputRent} onChange={handleChangeRent} />
        <button type="button" className="continue">
          Continuer
        </button>
      </div>
    </SRent>
  );
};

export default Rent;

Rent.propTypes = {
  setRent: PropTypes.func,
  inputRent: PropTypes.number,
};
Rent.defaultProps = {
  inputRent: 0,
  setRent: () => {},
};
