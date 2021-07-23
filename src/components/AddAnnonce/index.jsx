import { useState } from 'react';
import Addannoncestyle from './style';
import Title from './Title';
import Infos from './Infos';
import Description from './Description';
import Upload from '../UploadImage';
import { request } from '../../utilities';

import Accomodation from '../Accomodation/Display';

function AddAnnonce() {
  const [inputDistrict, setDistrict] = useState('');
  const [inputCity, setCity] = useState('');
  const [inputFurnished, setFurnished] = useState(true);
  const [inputRent, setRent] = useState(0);
  const [inputSurface, setSurface] = useState(0);
  const [inputAnimals, setAnimals] = useState(true);
  const [inputTitle, setTitle] = useState('');
  const [inputCategory, setCategory] = useState(false);
  const [inputType, setType] = useState('');
  const [inputEnergyClass, setEnergyClass] = useState('');
  const [inputGes, setGes] = useState('');
  const [inputRooms, setRooms] = useState(0);
  const [inputDescribe, setDescribe] = useState('');
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      district: inputDistrict,
      city: inputCity,
      furnished: inputFurnished,
      rent: inputRent,
      surface: inputSurface,
      animals: inputAnimals,
      title: inputTitle,
      category: inputCategory,
      type: inputType,
      energyClass: inputEnergyClass,
      ges: inputGes,
      rooms: inputRooms,
      describe: inputDescribe,
      idUser: 1,
    };

    request({ method: 'post', url: '/annonce', data: dataToSend });
  };

  return (
    <Addannoncestyle>
      <h1>Déposer une annonce</h1>
      <form onSubmit={handleSubmit}>
        <Title
          setCategory={setCategory}
          setTitle={setTitle}
          inputTitle={inputTitle}
          inputCategory={inputCategory}
        />
        <Infos
          inputFurnished={inputFurnished}
          inputSurface={inputSurface}
          inputAnimals={inputAnimals}
          inputType={inputType}
          inputEnergyClass={inputEnergyClass}
          inputGes={inputGes}
          inputRooms={inputRooms}
          setType={setType}
          setSurface={setSurface}
          setFurnished={setFurnished}
          setRooms={setRooms}
          setAnimals={setAnimals}
          setEnergyClass={setEnergyClass}
          setGes={setGes}
        />
        <Description
          setDistrict={setDistrict}
          setCity={setCity}
          setDescribe={setDescribe}
          setRent={setRent}
          inputDistrict={inputDistrict}
          inputCity={inputCity}
          inputDescribe={inputDescribe}
          inputRent={inputRent}
        />

        <Upload image={image} setImage={setImage} />

        <Accomodation
          district={inputDistrict}
          city={inputCity}
          furnished={inputFurnished}
          rent={inputRent}
          surface={inputSurface}
          animals={inputAnimals}
          title={inputTitle}
          rooms={inputRooms}
          energyClass={inputEnergyClass}
          property={inputType}
          description={inputDescribe}
        />

        <input type="submit" value="Send!" className="sendButton" />
      </form>
    </Addannoncestyle>
  );
}
export default AddAnnonce;
