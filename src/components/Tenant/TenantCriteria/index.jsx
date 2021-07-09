
import Proptypes from 'prop-types';
import STenantCriteria from './style';

function TenantCriteria = ({
  setCity,
  setPets,
  setGender,
  inputYears,
  inputNumbers,
  inputAge,
  inputRent,
}) => {
  const handleChangeCity = (event) => {
    setCity(event.target.value);
    const handleChangeRent = (event) => {
      inputRent(event.target.value);
    };
    const handleChangePets = (event) => {
      setPets(event.target.value);
    };
    const handleChangeGender = (event) => {
      setGender(event.target.value);
    };
    const handleChangeYears = (event) => {
      inputYears(event.target.value);
    };
    const handleChangeAge = (event) => {
      inputAge(event.target.value);
    };
    const handleChangeNumbers = (event) => {
      inputNumbers(event.target.value);
    };
    return (
      <STenantCriteria>
        <h2 className="titleCriteria"> Mes Critéres</h2>
        <div className="PhotoStyle">
          <img
            className="PhotoCriteria"
            src="https://i.ibb.co/87SV21k/Capture-decran-2021-05-26-a-09-47-33.png"
            alt="PhotoProfil"
          />
        </div>
        <form className="filterform">
          <div className="selectprop">
            <label className="townprop" htmlFor="fname">
              Ville de Recherche:
              <select
                className="SelectCity"
                type="text"
                value={setcity}
                onChange={handleChangeCity}
              >
                <option value="LilleCentre">Lille Centre</option>
                <option value="LilleWazemmes">Lille Wazemmes</option>
                <option value="Loos">Loos</option>
              </select>
            </label>
            <label htmlFor="fname">
              Animaux:
              <select
                className="SelectPets"
                value={setPets}
                onChange={handleChangePets}
              >
                <option value="Non Merci">Non Merci</option>
                <option value="Ne me derange pas">Ne me derange pas</option>
              </select>
            </label>
            <label htmlFor="fname">
              Genre:
              <select
                className="SelectGender"
                value={setGender}
                onChange={handleChangeGender}
              >
                <option value="Femme">Femme</option>
                <option value="Homme">Homme</option>
              </select>
            </label>
          </div>
          <div className="numberprop">
            <label htmlFor="firstField">
              Anee etudes Colocataires:
              <input
                id="firstField"
                value={inputYears}
                onChange={handleChangeYears}
                type="number"
                min="1"
                max="6"
              />
            </label>
            <label htmlFor="secondField">
              Nombre de Colocataires:
              <input
                id="secondField"
                value={inputNumbers}
                onChange={handleChangeNumbers}
                type="number"
                min="1"
                max="5"
              />
            </label>
            <label htmlFor="thirdField">
              Age de Colocataires:
              <input
                id="thirdField"
                value={inputAge}
                onChange={handleChangeAge}
                type="number"
                min="17"
                max="40"
              />
              <input
                id="fourField"
                value={inputAge}
                onChange={handleChangeAge}
                type="number"
                min="17"
                max="40"
              />
            </label>
            <label htmlFor="thirdField">
              Prix Location:
              <input
                id="fiveField"
                value={inputRent}
                onChange={handleChangeRent}
                type="number"
                min="200"
                max="800"
              />
              <input
                id="fourField"
                value={inputRent}
                onChange={handleChangeRent}
                type="number"
                min="200"
                max="800"
              />
            </label>
          </div>
          <div>
            <button className="buttonprop" type="submit">
              Submit
            </button>
          </div>
        </form>
      </STenantCriteria>
    );
  };

  export default TenantCriteria

  TenantCriteria.propTypes = {
    setCity: Proptypes.string.isRequired,
    setPets: Proptypes.bool.isRequired,
    setGender: Proptypes.string.isRequired,
    inputYears: Proptypes.number.isRequired,
    inputNumbers: Proptypes.number.isRequired,
    inputAge: Proptypes.number.isRequired,
    inputRent: Proptypes.func.isRequired,
  };

