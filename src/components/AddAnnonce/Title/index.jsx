import PropTypes from 'prop-types';

const Title = ({ setCategory, setTitle, inputTitle, inputCategory }) => {
  const handleChangeTitle = (evt) => {
    setTitle(evt.target.value);
  };
  const handleChangeCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <p>Title:</p>
      <input type="text" value={inputTitle} onChange={handleChangeTitle} />
      <p>Category:</p>
      <input
        type="text"
        value={inputCategory}
        onChange={handleChangeCategory}
      />
    </>
  );
};

export default Title;
Title.propTypes = {
  setTitle: PropTypes.func,
  setCategory: PropTypes.func,
  inputTitle: PropTypes.string,
  inputCategory: PropTypes.string,
};
Title.defaultProps = {
  inputTitle: '',
  inputCategory: '',
  setTitle: () => {},
  setCategory: () => {},
};
