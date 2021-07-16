import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import STenantDashboard from './style';
import PersonsGallery from '../../PersonsGalleryMatch';
import AnnonceList from '../../Accomodation/List';

export default function TenantDashboard() {
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
          <div className="imgAvatar" />
          <h3 className="h3User">
            Bienvenue
            <br />
            &apos;UserName&apos;
          </h3>
        </div>

        <Link to="/tenant/profil" className="buttonProfil">
          <h3 className="h3Profil">Mon profile</h3>
        </Link>

        <Link to="/tenant/criteria" className="buttonCriteria">
          <h3 className="h3Criteria">Mes critères</h3>
        </Link>

        <Link to="/" className="buttonDisconnected">
          <img
            src="/Tenant/TenantDashbord/logout.svg"
            alt="Disconnected"
            title="Déconnexion"
            className="imgDisconnected"
          />
        </Link>
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
        <Link to="/tenant/roommate-hunt">
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
          <Link to="/tenant/announcements-save">
            <h3 className="h3Announcements">Mes annonces sauvegardées</h3>
          </Link>
          <div className="galleryAnnouncements">
            <AnnonceList title="Toutes mes annonces" data={accomodationsData} />
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
