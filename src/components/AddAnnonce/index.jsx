import { useState } from 'react';
import axios from 'axios';
import Addannoncestyle from './style';
import Title from './Title';
import Infos from './Infos';
import Description from './Description';
import Rent from './Rent';
import Pictures from './Pictures';
import Preview from './Preview';

function AddAnnonce() {
  const [inputAdress, setAdress] = useState('');
  const [inputCity, setCity] = useState('');
  const [inputFurnished, setFurnished] = useState('');
  const [inputRent, setRent] = useState(0);
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
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

        <Preview
          inputTitle={inputTitle}
          inputCategory={inputCategory}
          inputFurnished={inputFurnished}
          inputSurface={inputSurface}
          inputRooms={inputRooms}
          inputAnimals={inputAnimals}
          inputEnergyClass={inputEnergyClass}
          inputGes={inputGes}
          inputAdress={inputAdress}
          inputCity={inputCity}
          inputDescribe={inputDescribe}
          inputRent={inputRent}
          inputPicture1={inputPicture1}
          inputPicture2={inputPicture2}
          inputPicture3={inputPicture3}
        />

        <input type="submit" value="Send!" className="sendButton" />
      </form>
    </Addannoncestyle>
  );
}
export default AddAnnonce;
