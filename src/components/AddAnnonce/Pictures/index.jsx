import Proptypes from 'prop-types';
import SPictures from './style';

const Pictures = ({
  setPicture1,
  setPicture2,
  setPicture3,
  inputPicture1,
  inputPicture2,
  inputPicture3,
}) => {
  const handleChangePicture1 = (evt) => {
    setPicture1(evt.target.value);
  };
  const handleChangePicture2 = (evt) => {
    setPicture2(evt.target.value);
  };

  const handleChangePicture3 = (evt) => {
    setPicture3(evt.target.value);
  };

  return (
    <SPictures>
      <div className="partContainer">
        <h2>Photos :</h2>
        <input
          type="text"
          value={inputPicture1}
          onChange={handleChangePicture1}
        />
        <input
          type="text"
          value={inputPicture2}
          onChange={handleChangePicture2}
        />
        <input
          type="text"
          value={inputPicture3}
          onChange={handleChangePicture3}
        />
        <div className="navButton">
          <button type="button" className="return">
            Précédent
          </button>
          <button type="button" className="continue">
            Continuer
          </button>
        </div>
      </div>
    </SPictures>
  );
};

export default Pictures;

Pictures.propTypes = {
  setPicture1: Proptypes.func.isRequired,
  setPicture2: Proptypes.func.isRequired,
  setPicture3: Proptypes.func.isRequired,
  inputPicture1: Proptypes.string.isRequired,
  inputPicture2: Proptypes.string.isRequired,
  inputPicture3: Proptypes.string.isRequired,
};
