import PropTypes from 'prop-types';
import STitle from './style';

const Title = ({ setCategory, setTitle, inputTitle, inputCategory }) => {
  const handleChangeTitle = (evt) => {
    setTitle(evt.target.value);
  };

  return (
    <STitle>
      <div className="partContainer">
        <div className="titleBox">
          <div className="titleContainer">
            <h2>Titre de l&apos;annonce :</h2>
            <input
              type="text"
              value={inputTitle}
              onChange={handleChangeTitle}
              className="inputTitle"
            />
          </div>
          <div className="categoryContainer">
            <h2>Catégorie :</h2>
            <div className="radioContainer">
              <label htmlFor="radio_1">
                <input
                  id="radio_1"
                  type="radio"
                  name="place-cat"
                  value
                  onClick={() => setCategory(true)}
                  checked={inputCategory === true}
                />
                Location
              </label>
              <label htmlFor="radio_2">
                <input
                  id="radio_2"
                  type="radio"
                  name="place-cat"
                  value={false}
                  onClick={() => setCategory(false)}
                  checked={inputCategory === false}
                />
                Colocation
              </label>
            </div>
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
    </STitle>
  );
};

export default Title;
Title.propTypes = {
  setTitle: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  inputTitle: PropTypes.string.isRequired,
  inputCategory: PropTypes.bool.isRequired,
};
