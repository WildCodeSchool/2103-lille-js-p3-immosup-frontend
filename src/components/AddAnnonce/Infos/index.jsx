import PropTypes from 'prop-types';

const Infos = ({
  inputFurnished,
  inputSurface,
  inputAnimals,
  inputType,

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
  // const handleChangeRooms = (evt) => {
  //   setRooms(evt.target.value);
  // };

  const handleChangeFurnished = (evt) => {
    setFurnished(evt.target.value);
  };

  const handleChangeAnimals = (evt) => {
    setAnimals(evt.target.value);
  };

  const seeIfSup = () => {
    if (inputRooms > 0) {
      setRooms(inputRooms - 1);
    } else {
      setRooms(inputRooms);
    }
  };
  return (
    <div className="infos">
      <p>Type:</p>
      <select value={inputType} onChange={handleChangeType}>
        <option selected value="">
          {' '}
        </option>

        <option value="house">Maison</option>
        <option value="appartement">Appartement</option>
      </select>
      <p>{inputType}</p>
      <p>Furnished:</p>

      <select value={inputFurnished} onChange={handleChangeFurnished}>
        <option selected value="">
          {' '}
        </option>

        <option value="1">Meublé</option>
        <option value="0">Non-meublé</option>
      </select>
      <div className="surface">
        <p>Surface:</p>
        <input
          type="text"
          value={inputSurface}
          onChange={handleChangeSurface}
        />
      </div>
      <div className="rooms">
        <p>Rooms:</p>
        <button type="button" onClick={() => seeIfSup()}>
          -
        </button>
        <p>{inputRooms}</p>
        <button
          type="button"
          onClick={() => {
            setRooms(inputRooms + 1);
          }}
        >
          +
        </button>
      </div>

      <p>Animals:</p>
      <select value={inputAnimals} onChange={handleChangeAnimals}>
        <option selected value="">
          {' '}
        </option>

        <option value="1">Oui</option>
        <option value="0">Non</option>
      </select>

      <p>Energy class:</p>

      <button type="button" oncClick={() => setEnergyClass('A')}>
        A
      </button>
      <button type="button" oncClick={() => setEnergyClass('B')}>
        B
      </button>
      <button type="button" oncClick={() => setEnergyClass('C')}>
        C
      </button>
      <button type="button" oncClick={() => setEnergyClass('D')}>
        D
      </button>
      <button type="button" oncClick={() => setEnergyClass('E')}>
        E
      </button>
      <button type="button" oncClick={() => setEnergyClass('F')}>
        F
      </button>
      <button type="button" oncClick={() => setEnergyClass('G')}>
        G
      </button>
      <p>GES:</p>
      <button type="button" oncClick={() => setGes('A')}>
        A
      </button>
      <button type="button" oncClick={() => setGes('B')}>
        B
      </button>
      <button type="button" oncClick={() => setGes('C')}>
        C
      </button>
      <button type="button" oncClick={() => setGes('D')}>
        D
      </button>
      <button type="button" oncClick={() => setGes('E')}>
        E
      </button>
      <button type="button" oncClick={() => setGes('F')}>
        F
      </button>
      <button type="button" oncClick={() => setGes('G')}>
        G
      </button>

      <button type="button">Continuer</button>
    </div>
  );
};

export default Infos;
Infos.propTypes = {
  inputFurnished: PropTypes.string,
  inputSurface: PropTypes.number,
  inputAnimals: PropTypes.string,
  inputType: PropTypes.string,

  inputRooms: PropTypes.number,
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

  inputRooms: '',
  setType: () => {},
  setSurface: () => {},
  setFurnished: () => {},
  setRooms: () => {},
  setAnimals: () => {},
  setEnergyClass: () => {},
  setGes: () => {},
};
