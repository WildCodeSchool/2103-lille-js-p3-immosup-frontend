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
      <div className="PhotoStyle">
        <img
          className="PhotoCriteria"
          src="https://i.ibb.co/87SV21k/Capture-decran-2021-05-26-a-09-47-33.png"
          alt="PhotoProfil"
        />
      </div>
      <form className="filterform" onSubmit={handleSubmit}>
        <fieldset className="selectprop">
          <label className="townprop" htmlFor="crCity">
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
          <label htmlFor="crPets">
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
          <label htmlFor="crGender">
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
          <label htmlFor="crNbCotenantsMin">
            Nombre de Colocataires:
            <input
              id="nbCotenantsMin"
              name="crNbCotenantsMin"
              onChange={handleChange}
              type="number"
              min="1"
              max={form.cr_nbCotenantsMax}
              value={form.cr_nbCotenantsMin}
            />
            <input
              id="nbCotenantsMax"
              name="crNbCotenantsMax"
              onChange={handleChange}
              type="number"
              min={form.cr_nbCotenantsMin}
              max="5"
              value={form.cr_nbCotenantsMax}
            />
          </label>
          <label htmlFor="crAgeCotenantsMin">
            Age de Colocataires:
            <input
              id="ageCotenantsMin"
              name="crAgeCotenantsMin"
              onChange={handleChange}
              type="number"
              min="17"
              max={form.ageCotenantsMax}
              value={form.cr_ageCotenantsMin}
            />
            <input
              id="ageCotenantsMax"
              name="crAgeCotenantsMax"
              onChange={handleChange}
              type="number"
              min={form.ageCotenantsMin}
              max="40"
              value={form.cr_ageCotenantsMax}
            />
          </label>
          <label htmlFor="crBudgetMin">
            Prix Location:
            <input
              id="budgetMin"
              name="crBudgetMin"
              onChange={handleChange}
              type="number"
              min="200"
              max={form.budgetMax}
              value={form.cr_budgetMin}
            />
            <input
              id="budgetMax"
              name="crBudgetMax"
              onChange={handleChange}
              type="number"
              min={form.budgetMin}
              max="800"
              value={form.cr_budgetMax}
            />
          </label>
        </fieldset>
        <input type="submit" className="buttonprop" value="Enregistrer" />
      </form>
    </STenantCriteria>
  );
};

export default TenantCriteria;
