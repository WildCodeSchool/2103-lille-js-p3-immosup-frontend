import { useState } from 'react';
import axios from 'axios';
import Addannoncestyle from './style';
import Title from './Title';
import Infos from './Infos';
import Description from './Description';
import Rent from './Rent';
import Pictures from './Pictures';

function AddAnnonce() {
  // const [inputDistrict, setDistrict] = useState('');
  const [inputAdress, setAdress] = useState('');
  const [inputCity, setCity] = useState('');
  const [inputFurnished, setFurnished] = useState('');
  const [inputRent, setRent] = useState('');
  const [inputSurface, setSurface] = useState(0);
  const [inputAnimals, setAnimals] = useState('');
  const [inputTitle, setTitle] = useState('');
  const [inputCategory, setCategory] = useState('');
  const [inputType, setType] = useState('');
  const [inputEnergyClass, setEnergyClass] = useState('');
  const [inputGes, setGes] = useState('');
  const [inputRooms, setRooms] = useState(0);
  const [inputDescribe, setDescribe] = useState('');
  const [inputPicture1, setPicture1] = useState('');
  const [inputPicture2, setPicture2] = useState('');
  const [inputPicture3, setPicture3] = useState('');

  // const handleChangeDistrict = (evt) => {
  //   setDistrict(evt.target.value);
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      // district: inputDistrict,
      address: inputAdress,
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
      Picture1: inputPicture1,
      Picture2: inputPicture2,
      Picture3: inputPicture3,
    };
    axios.post('http://localhost:5050/annonce', dataToSend);
  };

  return (
    <Addannoncestyle>
      <form onSubmit={handleSubmit}>
        <Title
          setCategory={setCategory}
          setTitle={setTitle}
          inputTitle={inputTitle}
          input
          category={inputCategory}
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

        {/* <p>District:</p>
        <input
          type="text"
          value={inputDistrict}
          onChange={handleChangeDistrict}
        /> */}

        <Description
          setAdress={setAdress}
          setCity={setCity}
          setDescribe={setDescribe}
          inputAdress={inputAdress}
          inputCity={inputCity}
          inputDescribe={inputDescribe}
        />

        <Rent setRent={setRent} inputRent={inputRent} />
        <Pictures
          setPicture1={setPicture1}
          setPicture2={setPicture2}
          setPicture3={setPicture3}
          inputPicture1={inputPicture1}
          inputPicture2={inputPicture2}
          inputPicture3={inputPicture3}
        />

        <input type="submit" value="Send!" />
      </form>
    </Addannoncestyle>
  );
}
export default AddAnnonce;
