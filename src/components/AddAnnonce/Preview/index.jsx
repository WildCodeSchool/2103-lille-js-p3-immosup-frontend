import PropTypes from 'prop-types';
import SPreview from './style';

const Preview = ({
  inputTitle,
  inputCategory,
  inputFurnished,
  inputSurface,
  inputRooms,
  inputAnimals,
  inputEnergyClass,
  inputGes,
  inputDistrict,
  inputCity,
  inputDescribe,
  inputRent,
}) => {
  return (
    <SPreview>
      <div className="partContainer">
        <h3>{inputTitle}</h3>
        <p>{inputCategory}</p>
        <p>{inputFurnished}</p>
        <p>{inputSurface}</p>
        <p>{inputRooms}</p>
        <p>{inputAnimals}</p>
        <p>{inputEnergyClass}</p>
        <p>{inputGes}</p>

        <p>{inputCity}</p>
        <p>{inputDistrict}</p>
        <p>{inputRent}</p>
        <p>{inputDescribe}</p>
      </div>
    </SPreview>
  );
};

export default Preview;
Preview.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputCategory: PropTypes.bool.isRequired,
  inputFurnished: PropTypes.bool.isRequired,
  inputSurface: PropTypes.number.isRequired,
  inputRooms: PropTypes.number.isRequired,
  inputAnimals: PropTypes.bool.isRequired,
  inputEnergyClass: PropTypes.string.isRequired,
  inputGes: PropTypes.string.isRequired,
  inputDistrict: PropTypes.string.isRequired,
  inputCity: PropTypes.string.isRequired,
  inputDescribe: PropTypes.string.isRequired,
  inputRent: PropTypes.number.isRequired,
};
