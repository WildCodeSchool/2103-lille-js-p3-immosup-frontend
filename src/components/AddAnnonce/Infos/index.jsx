import PropTypes from 'prop-types';

const Infos = ({
  inputFurnished,
  inputSurface,
  inputAnimals,
  inputType,
  inputEnergyClass,
  inputGes,
  inputRooms,
  setType,
  setSurface,
  setFurnished,
  setRooms,
  setAnimals,
  setEnergyClass,
  setGes,
}) => {
  const handleChangeType = (evt) => {
    setType(evt.target.value);
  };
  const handleChangeSurface = (evt) => {
    setSurface(evt.target.value);
  };
  const handleChangeRooms = (evt) => {
    setRooms(evt.target.value);
  };

  const handleChangeFurnished = (evt) => {
    setFurnished(evt.target.value);
  };

  const handleChangeAnimals = (evt) => {
    setAnimals(evt.target.value);
  };

  const handleChangeEnergyClass = (evt) => {
    setEnergyClass(evt.target.value);
  };
  const handleChangeGes = (evt) => {
    setGes(evt.target.value);
  };
  return (
    <div className="infos">
      <p>Type:</p>
      <input type="text" value={inputType} onChange={handleChangeType} />
      <p>Furnished:</p>
      <input
        type="text"
        value={inputFurnished}
        onChange={handleChangeFurnished}
      />
      <p>Surface:</p>
      <input type="text" value={inputSurface} onChange={handleChangeSurface} />
      <p>Rooms:</p>
      <input type="text" value={inputRooms} onChange={handleChangeRooms} />
      <p>Animals:</p>
      <input type="text" value={inputAnimals} onChange={handleChangeAnimals} />
      <p>Energy class:</p>
      <input
        type="text"
        value={inputEnergyClass}
        onChange={handleChangeEnergyClass}
      />
      <p>GES:</p>
      <input type="text" value={inputGes} onChange={handleChangeGes} />
    </div>
  );
};

export default Infos;
Infos.propTypes = {
  inputFurnished: PropTypes.string,
  inputSurface: PropTypes.string,
  inputAnimals: PropTypes.string,
  inputType: PropTypes.string,
  inputEnergyClass: PropTypes.string,
  inputGes: PropTypes.string,
  inputRooms: PropTypes.string,
  setType: PropTypes.func,
  setSurface: PropTypes.func,
  setFurnished: PropTypes.func,
  setRooms: PropTypes.func,
  setAnimals: PropTypes.func,
  setEnergyClass: PropTypes.func,
  setGes: PropTypes.func,
};
Infos.defaultProps = {
  inputFurnished: '',
  inputSurface: '',
  inputAnimals: '',
  inputType: '',
  inputEnergyClass: '',
  inputGes: '',
  inputRooms: '',
  setType: () => {},
  setSurface: () => {},
  setFurnished: () => {},
  setRooms: () => {},
  setAnimals: () => {},
  setEnergyClass: () => {},
  setGes: () => {},
};
