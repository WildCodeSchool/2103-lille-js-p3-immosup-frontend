import PropTypes from 'prop-types';

const Rent = ({ setRent, inputRent }) => {
  const handleChangeRent = (evt) => {
    setRent(evt.target.value);
  };

  return (
    <>
      <p>Rent</p>
      <input type="text" value={inputRent} onChange={handleChangeRent} />
    </>
  );
};

export default Rent;

Rent.propTypes = {
  setRent: PropTypes.func,
  inputRent: PropTypes.string,
};
Rent.defaultProps = {
  inputRent: '',
  setRent: () => {},
};
