import React from 'react';
import STenantCriteria from './style';

export default function TenantCriteria() {
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
      <form className="filterform">
        <div className="selectprop">
          <label className="townprop" htmlFor="fname">
            Ville de Recherche:
            <select className="SelectCity">
              <option value="LilleCentre">Lille Centre</option>
              <option value="LilleWazemmes">Lille Wazemmes</option>
              <option value="Loos">Loos</option>
            </select>
          </label>
          <label htmlFor="fname">
            Animaux:
            <select className="SelectPets">
              <option value="Non Merci">Non Merci</option>
              <option value="Ne me derange pas">Ne me derange pas</option>
            </select>
          </label>
          <label htmlFor="fname">
            Genre:
            <select className="SelectGender">
              <option value="Femme">Femme</option>
              <option value="Homme">Homme</option>
            </select>
          </label>
        </div>
        <div className="numberprop">
          <label htmlFor="firstField">
            Anee etudes Colocataires:
            <input id="firstField" type="number" min="1" max="6" />
          </label>
          <label htmlFor="secondField">
            Nombre de Colocataires:
            <input id="secondField" type="number" min="1" max="5" />
          </label>
          <label htmlFor="thirdField">
            Age de Colocataires:
            <input id="thirdField" type="number" min="17" max="40" />
            <input id="fourField" type="number" min="17" max="40" />
          </label>
          <label htmlFor="thirdField">
            Prix Location:
            <input id="fiveField" type="number" min="200" max="800" />
            <input id="fourField" type="number" min="200" max="800" />
          </label>
        </div>
        <div>
          <button className="buttonprop" type="submit">
            Submit
          </button>
        </div>
      </form>
    </STenantCriteria>
  );
}
