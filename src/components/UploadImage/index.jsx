// import axios from 'axios';
import PropTypes from 'prop-types';

function Upload({ image, setImage }) {
  // const handleChange = (e) => {
  //   if (e.target.files.length) {
  //     setImage({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0],
  //     });
  //   }
  // };
  /*
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image.raw);

    axios.post('http://localhost:5050/files', formData).then(() => {
    });
  }; */

  return (
    <div className="App">
      <input
        type="file"
        id="upload-button"
        onChange={(e) => {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
          });
        }}
      />
      <img src={image.preview} alt="" />
    </div>
  );
}

Upload.propTypes = {
  image: PropTypes.shape.isRequired,
  setImage: PropTypes.func.isRequired,
};

export default Upload;
