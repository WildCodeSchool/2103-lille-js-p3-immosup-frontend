// import Proptypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import STenantCriteria from './style';

const TenantCriteria = () => {
  const [form, setForm] = useState({
    crAgeCotenantsMax: 40,
    crAgeCotenantsMin: 17,
    crBudgetMax: 800,
    crBudgetMin: 200,
    crCity: 'All',
    crNbCotenantsMax: 5,
    crNbCotenantsMin: 1,
    crPets: true,
    crGender: 'A',
  });

  const handleChange = (e) => {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myId = 7;
    axios
      .put(`http://localhost:5050/users/${myId}`, form)
      .then(() => {
        toast('Update succesful !');
      })
      .catch((err) => {
        toast.warn(`Update failed : ${err}`);
      });
  };

  return (
    <STenantCriteria>
      <h2 className="titleCriteria"> Mes Critéres</h2>
      <div className="pagestyle">
        <div className="PhotoStyle">
          <img
            className="PhotoCriteria"
            src="/image\photoprofil.jpg"
            alt="PhotoProfil"
          />
        </div>
        <form className="filterform" onSubmit={handleSubmit}>
          <fieldset className="selectprop">
            <label className="townstyle" htmlFor="crCity">
              Ville de Recherche:
              <select
                className="SelectCity"
                name="crCity"
                type="text"
                onChange={handleChange}
              >
                <option value="All" selected>
                  Métropole lilloise
                </option>
                <option value="LilleCentre">Lille Centre</option>
                <option value="LilleWazemmes">Lille Wazemmes</option>
                <option value="Loos">Loos</option>
              </select>
            </label>
            <label className="petsstyle" htmlFor="crPets">
              Animaux:
              <select
                className="SelectPets"
                name="crPets"
                onChange={handleChange}
              >
                <option value={false}>Non Merci</option>
                <option value selected>
                  Ne me derange pas
                </option>
              </select>
            </label>
            <label className="genderStyle" htmlFor="crGender">
              Genre:
              <select
                className="SelectGender"
                name="crGender"
                onChange={handleChange}
              >
                <option value="F">Femmes uniquement</option>
                <option value="M">Homme uniquement</option>
                <option value="A">Sans préférence</option>
              </select>
            </label>
          </fieldset>
          <fieldset className="numberprop">
            <label className="cotenantstyle" htmlFor="crNbCotenantsMin">
              Nombre de Colocataires:
              <input
                id="nbCotenantsMin"
                name="crNbCotenantsMin"
                onChange={handleChange}
                type="number"
                min="1"
                max={form.crNbCotenantsMax}
                value={form.crNbCotenantsMin}
              />
              <input
                id="nbCotenantsMax"
                name="crNbCotenantsMax"
                onChange={handleChange}
                type="number"
                min={form.crNbCotenantsMin}
                max="5"
                value={form.crNbCotenantsMax}
              />
            </label>
            <label className="cotenantStyle" htmlFor="crAgeCotenantsMin">
              Age de Colocataires:
              <input
                id="ageCotenantsMin"
                name="crAgeCotenantsMin"
                onChange={handleChange}
                type="number"
                min="17"
                max={form.crAgeCotenantsMax}
                value={form.crAgeCotenantsMin}
              />
              <input
                id="ageCotenantsMax"
                name="crAgeCotenantsMax"
                onChange={handleChange}
                type="number"
                min={form.crAgeCotenantsMin}
                max="40"
                value={form.crAgeCotenantsMax}
              />
            </label>
            <label className="budgetStyle" htmlFor="crBudgetMin">
              Prix Location:
              <input
                id="budgetMin"
                name="crBudgetMin"
                onChange={handleChange}
                type="number"
                min="200"
                max={form.crBudgetMax}
                value={form.crBudgetMin}
              />
              <input
                id="budgetMax"
                name="crBudgetMax"
                onChange={handleChange}
                type="number"
                min={form.crBudgetMin}
                max="800"
                value={form.crBudgetMax}
              />
            </label>
          </fieldset>
          <input className="buttonprop" type="submit" value="Enregistrer" />
        </form>
      </div>
    </STenantCriteria>
  );
};

export default TenantCriteria;
