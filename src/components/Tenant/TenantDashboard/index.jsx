import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import User from '../../../contexts/UserInfos';
import STenantDashboard, { SProfil } from './style';

import PersonsGallery from '../../PersonsGalleryMatch';
import AnnonceList from '../../Accomodation/List';

export default function TenantDashboard() {
  const { userInfos, setUserInfos } = useContext(User);
  const [match, setMatch] = useState([]);
  const [accomodationsData, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/users').then(({ data }) => {
      const newData = data.map((person) => {
        return { ...person };
      });

      setMatch(newData);
    });

    axios.get('http://localhost:5050/annonce').then(({ data }) => {
      const newData = data.map((annonce) => {
        return { ...annonce, pictures: annonce.photos?.split(',').slice(0, 1) };
      });

      setData(newData);
    });
  }, []);

  return (
    <STenantDashboard>
      <h2>Tableau de bord</h2>

      {/* personal ================================================= */}

      <div className="personal">
        <div className="user">
          <SProfil
            bckImg={userInfos?.avatarUrl || '/image/IconeProfilNoir.png'}
          />
          <h3 className="h3User">
            Bienvenue
            <br />
            {userInfos?.firstname || "'UserName'"}
          </h3>
        </div>

        <Link to="/tenant/profil" className="buttonProfil">
          <h3 className="h3Profil">Mon profile</h3>
        </Link>

        <Link to="/tenant/dashboard" className="buttonCriteria">
          <h3 className="h3Criteria">Mes critères</h3>
        </Link>

        <button
          type="button"
          className="buttonDisconnected"
          onClick={() => {
            setUserInfos(null);
          }}
        >
          <img
            src="/Tenant/TenantDashbord/logout.svg"
            alt="Disconnected"
            title="Déconnexion"
            className="imgDisconnected"
          />
        </button>
      </div>

      {/* flatsharing ================================================= */}

      <div className="flatsharing">
        <div className="myMatch">
          <div className="galleryMatch">
            <div className="profilMatch">
              <PersonsGallery persons={match} />
            </div>
          </div>
        </div>
        <Link to="/tenant/dashboard">
          <img
            src="/Tenant/TenantDashbord/people.svg"
            alt="Roommate hunt"
            title="Chasse aux colocs"
            className="imgHunt"
          />
        </Link>
      </div>

      {/* announcements ================================================= */}

      <div className="announcements">
        <div className="housing">
          <Link to="/tenant/announcements-save" />
          <div className="galleryAnnouncements">
            <AnnonceList title="Mes annonces" data={accomodationsData} />
          </div>
        </div>
        <Link to="/tenant/housing-search">
          <img
            src="/Tenant/TenantDashbord/search.svg"
            alt="Housing search"
            title="Recherche de logements"
            className="search"
          />
        </Link>
      </div>
    </STenantDashboard>
  );
}
