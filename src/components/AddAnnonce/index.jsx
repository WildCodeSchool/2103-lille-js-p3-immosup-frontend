import { useState } from 'react';
import axios from 'axios';
import Addannoncestyle from './style';
import Title from './Title';
import Description from './Description';
import Rent from './Rent';

function AddAnnonce() {
  const [inputDistrict, setDistrict] = useState('');
  const [inputAdress, setAdress] = useState('');
  const [inputCity, setCity] = useState('');
  const [inputFurnished, setFurnished] = useState('');
  const [inputRent, setRent] = useState('');
  const [inputSurface, setSurface] = useState('');
  const [inputAnimals, setAnimals] = useState('');
  const [inputTitle, setTitle] = useState('');
  const [inputCategory, setCategory] = useState('');
  const [inputType, setType] = useState('');
  const [inputEnergyClass, setEnergyClass] = useState('');
  const [inputRooms, setRooms] = useState('');
  const [inputDescribe, setDescribe] = useState('');

  const handleChangeDistrict = (evt) => {
    setDistrict(evt.target.value);
  };

  const handleChangeFurnished = (evt) => {
    setFurnished(evt.target.value);
  };

  const handleChangeSurface = (evt) => {
    setSurface(evt.target.value);
  };

  const handleChangeAnimals = (evt) => {
    setAnimals(evt.target.value);
  };

  const handleChangeType = (evt) => {
    setType(evt.target.value);
  };

  const handleChangeEnergyClass = (evt) => {
    setEnergyClass(evt.target.value);
  };

  const handleChangeRooms = (evt) => {
    setRooms(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      district: inputDistrict,
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
      rooms: inputRooms,
      describe: inputDescribe,
      idUser: 1,
    };
    axios.post('http://localhost:5050/annonce', dataToSend);
  };

  return (
    <Addannoncestyle>
      <Title
        setCategory={setCategory}
        setTitle={setTitle}
        inputTitle={inputTitle}
        input
        category={inputCategory}
      />
      <form onSubmit={handleSubmit}>
        <p>District:</p>
        <input
          type="text"
          value={inputDistrict}
          onChange={handleChangeDistrict}
        />

        <Description
          setAdress={setAdress}
          setCity={setCity}
          setDescribe={setDescribe}
          inputAdress={inputAdress}
          inputCity={inputCity}
          inputDescribe={inputDescribe}
        />

        <p>Furnished:</p>
        <input
          type="text"
          value={inputFurnished}
          onChange={handleChangeFurnished}
        />
        <Rent setRent={setRent} inputRent={inputRent} />
        <input
          type="text"
          value={inputSurface}
          onChange={handleChangeSurface}
        />
        <p>Animals:</p>
        <input
          type="text"
          value={inputAnimals}
          onChange={handleChangeAnimals}
        />

        <p>Type:</p>
        <input type="text" value={inputType} onChange={handleChangeType} />
        <p>Energy class:</p>
        <input
          type="text"
          value={inputEnergyClass}
          onChange={handleChangeEnergyClass}
        />
        <p>Rooms:</p>
        <input type="text" value={inputRooms} onChange={handleChangeRooms} />

        <input type="submit" value="Send!" />
      </form>
    </Addannoncestyle>
  );
}
export default AddAnnonce;
