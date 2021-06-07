import React from 'react';
import SFiltreLogement from './style';
import MultiRangeSlider from './MultiRange/index';

function FiltreLogement() {
  return (
    <SFiltreLogement>
      <h2> Mes Critéres</h2>
      <div className="blocCriteres">
        <div className="PhotoStyle">
          <img
            className="PhotoCriteres"
            src="https://i.ibb.co/87SV21k/Capture-decran-2021-05-26-a-09-47-33.png"
            alt="PhotoProfil"
          />
        </div>
        <div className="CriteresBox">
          <div className="SelectCriteresVille">
            <h3>Ville de Recherche</h3>
            <select>
              <option value="LilleCentre">Lille Centre</option>
              <option value="LilleWazemmes">Lille Wazemmes</option>
              <option value="Loos">Loos</option>
            </select>
          </div>
          <div className="SelectCriteresAnimaux">
            <h3>Animaux</h3>
            <select>
              <option value="Non Merci">Non Merci</option>
              <option value="Ne me derange pas">Ne me derange pas</option>
            </select>
          </div>
          <div className="SelectGenre">
            <h3>Genre de Colocataire</h3>
            <select>
              <option value="Femme">Femme</option>
              <option value="Homme">Homme</option>
            </select>
          </div>
        </div>
        <div className="FiltreRange">
          <div className="NombreColoc">
            <h3>Nombre de Colocataires</h3>
            <MultiRangeSlider min={1} max={6} />
          </div>
          <div className="AnneeColoc">
            <h3>Années d’étude des colocataires</h3>
            <MultiRangeSlider min={1} max={6} />
          </div>
          <div className="AgeColoc">
            <h3>Âge des colocataires souhaités</h3>
            <MultiRangeSlider min={17} max={40} />
          </div>
        </div>
        <div className="CriteresButton">
          <button type="submit" className="default">
            Enregistrer
          </button>
        </div>
      </div>
    </SFiltreLogement>
  );
}

export default FiltreLogement;
