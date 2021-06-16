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
  inputAdress,
  inputCity,
  inputDescribe,
  inputRent,
  inputPicture1,
  inputPicture2,
  inputPicture3,
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
        <p>{inputAdress}</p>
        <p>{inputCity}</p>
        <p>{inputDescribe}</p>
        <p>{inputRent}</p>
        <img src={inputPicture1} alt="Picture1" />
        <img src={inputPicture2} alt="Picture2" />
        <img src={inputPicture3} alt="Picture3" />
      </div>
    </SPreview>
  );
};

export default Preview;
Preview.propTypes = {
  inputTitle: PropTypes.string,
  inputCategory: PropTypes.string,
  inputFurnished: PropTypes.string,
  inputSurface: PropTypes.number,
  inputRooms: PropTypes.number,
  inputAnimals: PropTypes.string,
  inputEnergyClass: PropTypes.string,
  inputGes: PropTypes.string,
  inputAdress: PropTypes.string,
  inputCity: PropTypes.string,
  inputDescribe: PropTypes.string,
  inputRent: PropTypes.number,
  inputPicture1: PropTypes.string,
  inputPicture2: PropTypes.string,
  inputPicture3: PropTypes.string,
};

Preview.defaultProps = {
  inputTitle: PropTypes.string,
  inputCategory: '',
  inputFurnished: '',
  inputSurface: 0,
  inputRooms: 0,
  inputAnimals: '',
  inputEnergyClass: '',
  inputGes: '',
  inputAdress: '',
  inputCity: '',
  inputDescribe: '',
  inputRent: 0,
  inputPicture1: '',
  inputPicture2: '',
  inputPicture3: '',
};
