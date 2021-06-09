import React from 'react';
import STenantCriteria from './style';
import MultiRangeSlider from './MultiRange/index';

function TenantCriteria() {
  return (
    <STenantCriteria>
      {/* Create bloc Criteria filter */}
      <div className="blocCriteria">
        <h2 className="titleCriteria"> Mes Critéres</h2>
        <div className="PhotoStyle">
          <img
            className="PhotoCriteria"
            src="https://i.ibb.co/87SV21k/Capture-decran-2021-05-26-a-09-47-33.png"
            alt="PhotoProfil"
          />
        </div>
        <div className="CriteriaBox">
          <div className="SelectCriteriaTown">
            <h2 className="titleTown">Ville de Recherche</h2>
            <select>
              <option value="LilleCentre">Lille Centre</option>
              <option value="LilleWazemmes">Lille Wazemmes</option>
              <option value="Loos">Loos</option>
            </select>
          </div>
          <div className="SelectCriteriaPets">
            <h3 className="titlePets">Animaux</h3>
            <select>
              <option value="Non Merci">Non Merci</option>
              <option value="Ne me derange pas">Ne me derange pas</option>
            </select>
          </div>
          <div className="SelectGender">
            <h3 className="titleCoTenant">Genre de Colocataire</h3>
            <select>
              <option value="Femme">Femme</option>
              <option value="Homme">Homme</option>
            </select>
          </div>
        </div>
        {/* Create RangeSlider Filter (importer From MultiRange) */}
        <div className="RangeButton">
          <div className="FiltreRange">
            <div className="NumberCoTenant">
              <h3 className="titleNumberCoTenant">Nombre de Colocataires</h3>
              <MultiRangeSlider min={1} max={6} />
            </div>
            <div className="YearsCoTenant">
              <h3 className="titleYarsCoTenant">
                Années d’étude des colocataires
              </h3>
              <MultiRangeSlider min={1} max={6} />
            </div>
            <div className="AgeCoTenant">
              <h3 className="titleAgeCoTenant">
                Âge des colocataires souhaités
              </h3>
              <MultiRangeSlider min={17} max={40} />
            </div>
          </div>
          <div className="CriteriaButton">
            <button type="submit" className="default">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </STenantCriteria>
  );
}

export default TenantCriteria;
