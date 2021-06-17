import PropTypes from 'prop-types';
import SInfo from './style';

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

  const seeIfSup = () => {
    if (inputRooms > 0) {
      setRooms(inputRooms - 1);
    } else {
      setRooms(inputRooms);
    }
  };
  return (
    <SInfo>
      <div className="partContainer">
        <div className="box1">
          <div className="boxPlaceType">
            <h2>Type de logement :</h2>
            <div className="radioContainer">
              <label htmlFor="radio_1">
                <input
                  id="radio_1"
                  type="radio"
                  name="place-type"
                  value="Maison"
                  onClick={handleChangeType}
                  checked={inputType === 'Maison'}
                />
                Maison
              </label>
              <label htmlFor="radio_2">
                <input
                  id="radio_2"
                  type="radio"
                  name="place-type"
                  value="Appartement"
                  onClick={handleChangeType}
                  checked={inputType === 'Appartement'}
                />
                Appartement
              </label>
            </div>
          </div>
          <div className="boxFurnished">
            <h2>Fourniture :</h2>
            <select value={inputFurnished} onChange={handleChangeFurnished}>
              <option selected value="">
                {' '}
              </option>
              <option value="1">Meublé</option>
              <option value="0">Non-meublé</option>
            </select>
          </div>
        </div>

        <div className="box2">
          <div className="surface">
            <h2>Surface :</h2>
            <input
              type="number"
              value={inputSurface}
              onChange={handleChangeSurface}
            />
          </div>
          <div className="rooms">
            <h2>Nombre de pièces:</h2>
            <div className="roomsButton">
              <button type="button" onClick={() => seeIfSup()}>
                -
              </button>
              <h2>{inputRooms}</h2>
              <button
                type="button"
                onClick={() => {
                  setRooms(inputRooms + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="boxAnimals">
            <h2>Animaux:</h2>
            <div className="radioContainer">
              <label htmlFor="radio_1">
                <input
                  id="radio_1"
                  type="radio"
                  name="animals"
                  value="1"
                  onClick={handleChangeAnimals}
                  checked={inputAnimals === '1'}
                />
                Oui
              </label>
              <label htmlFor="radio_2">
                <input
                  id="radio_2"
                  type="radio"
                  name="animals"
                  value="0"
                  onClick={handleChangeAnimals}
                  checked={inputAnimals === '0'}
                />
                Non
              </label>
            </div>
          </div>
        </div>

        <div className="box3">
          <div className="selectEnergy">
            <h2>Classe énergie</h2>
            <select value={inputEnergyClass} onChange={handleChangeEnergyClass}>
              <option selected value="">
                {' '}
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
          </div>

          <div className="selectGes">
            <h2>Gaz à effet de serre</h2>
            <select value={inputGes} onChange={handleChangeGes}>
              <option selected value="">
                {' '}
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
          </div>
        </div>
        <div className="navButton">
          <button type="button" className="return">
            Précédent
          </button>
          <button type="button" className="continue">
            Continuer
          </button>
        </div>
      </div>
    </SInfo>
  );
};

export default Infos;
Infos.propTypes = {
  inputFurnished: PropTypes.string,
  inputSurface: PropTypes.number,
  inputAnimals: PropTypes.string,
  inputType: PropTypes.string,
  inputGes: PropTypes.string,
  inputEnergyClass: PropTypes.string,
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
  inputGes: '',
  inputEnergyClass: '',
  inputRooms: '',
  setType: () => {},
  setSurface: () => {},
  setFurnished: () => {},
  setRooms: () => {},
  setAnimals: () => {},
  setEnergyClass: () => {},
  setGes: () => {},
};
