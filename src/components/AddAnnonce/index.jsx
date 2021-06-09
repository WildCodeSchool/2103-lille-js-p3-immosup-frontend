import { useState } from 'react';
import axios from 'axios';
import Addannoncestyle from './style';
import Title from './Title';
import Infos from './Infos';

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
  const [inputGes, setGes] = useState('');
  const [inputRooms, setRooms] = useState('');
  const [inputDescribe, setDescribe] = useState('');

  const handleChangeDistrict = (evt) => {
    setDistrict(evt.target.value);
  };

  const handleChangeAdress = (evt) => {
    setAdress(evt.target.value);
  };

  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
  };

  const handleChangeRent = (evt) => {
    setRent(evt.target.value);
  };

  const handleChangeDescribe = (evt) => {
    setDescribe(evt.target.value);
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
      ges: inputGes,
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

      <form onSubmit={handleSubmit}>
        <p>District:</p>
        <input
          type="text"
          value={inputDistrict}
          onChange={handleChangeDistrict}
        />
        <p>Adress:</p>
        <input type="text" value={inputAdress} onChange={handleChangeAdress} />
        <p>City:</p>
        <input type="text" value={inputCity} onChange={handleChangeCity} />

        <p>Rent:</p>
        <input type="text" value={inputRent} onChange={handleChangeRent} />

        <p>Describe:</p>
        <input
          type="text"
          value={inputDescribe}
          onChange={handleChangeDescribe}
        />

        <input type="submit" value="Send!" />
      </form>
    </Addannoncestyle>
  );
}
export default AddAnnonce;
