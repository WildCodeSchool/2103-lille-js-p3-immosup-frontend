// import Proptypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import STenantCriteria from './style';

const TenantCriteria = () => {
  const [form, setForm] = useState({
    cr_ageCotenantsMax: 40,
    cr_ageCotenantsMin: 17,
    cr_budgetMax: 800,
    cr_budgetMin: 200,
    cr_city: 'All',
    cr_nbCotenantsMax: 5,
    cr_nbCotenantsMin: 1,
    cr_pets: true,
    cr_gender: 'A',
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
          <label className="townprop" htmlFor="cr_city">
            Ville de Recherche:
            <select
              className="SelectCity"
              name="cr_city"
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
          <label htmlFor="cr_pets">
            Animaux:
            <select
              className="SelectPets"
              name="cr_pets"
              onChange={handleChange}
            >
              <option value={false}>Non Merci</option>
              <option value selected>
                Ne me derange pas
              </option>
            </select>
          </label>
          <label htmlFor="cr_gender">
            Genre:
            <select
              className="SelectGender"
              name="cr_gender"
              onChange={handleChange}
            >
              <option value="F">Femmes uniquement</option>
              <option value="M">Homme uniquement</option>
              <option value="A">Sans préférence</option>
            </select>
          </label>
        </fieldset>
        <fieldset className="numberprop">
          <label htmlFor="cr_nbCotenantsMin">
            Nombre de Colocataires:
            <input
              id="nbCotenantsMin"
              name="cr_nbCotenantsMin"
              onChange={handleChange}
              type="number"
              min="1"
              max={form.cr_nbCotenantsMax}
              value={form.cr_nbCotenantsMin}
            />
            <input
              id="nbCotenantsMax"
              name="cr_nbCotenantsMax"
              onChange={handleChange}
              type="number"
              min={form.cr_nbCotenantsMin}
              max="5"
              value={form.cr_nbCotenantsMax}
            />
          </label>
          <label htmlFor="cr_ageCotenantsMin">
            Age de Colocataires:
            <input
              id="ageCotenantsMin"
              name="cr_ageCotenantsMin"
              onChange={handleChange}
              type="number"
              min="17"
              max={form.ageCotenantsMax}
              value={form.cr_ageCotenantsMin}
            />
            <input
              id="ageCotenantsMax"
              name="cr_ageCotenantsMax"
              onChange={handleChange}
              type="number"
              min={form.ageCotenantsMin}
              max="40"
              value={form.cr_ageCotenantsMax}
            />
          </label>
          <label htmlFor="cr_budgetMin">
            Prix Location:
            <input
              id="budgetMin"
              name="cr_budgetMin"
              onChange={handleChange}
              type="number"
              min="200"
              max={form.budgetMax}
              value={form.cr_budgetMin}
            />
            <input
              id="budgetMax"
              name="cr_budgetMax"
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
