import { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    /* console.log(image); */
    const formData = new FormData();
    formData.append('image', image.raw);

    axios.post('http://localhost:5050/files', formData).then(() => {
      /* console.log('yay'); */
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleUpload}>
        <input type="file" id="upload-button" onChange={handleChange} />
        <input type="submit" value="Upload!" />
      </form>
      <img src={image} alt="" />
    </div>
  );
}

export default Upload;
