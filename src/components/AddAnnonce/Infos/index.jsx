import PropTypes from 'prop-types';
import SInfo from './style';

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
            <h2>Furnished:</h2>
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

        <h2>Classe énergie:</h2>
        <div className="buttonClassEnergy">
          <input type="checkbox" onChange={() => setEnergyClass('A')} />

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
        </div>

        <h2>GES: (Gaz à Effet de Serre)</h2>
        <div className="buttonGes">
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
        </div>

        <button type="button" className="continue">
          Continuer
        </button>
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
