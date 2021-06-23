import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import STenantDashboard from './style';
import UserInfos from '../../../contexts/UserInfos';

export default function TenantDashboard() {
  const [fav, setFav] = useState([]);
  const { userInfos } = useContext(UserInfos);

  useEffect(() => {
    if (userInfos) {
      axios
        .get(`http://localhost:5050/api/favorites/${userInfos.id}`)
        .then(({ data }) => {
          setFav(data);
        });
    }
  }, [userInfos]);
  return (
    <div>
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
            <Link to="/tenant/match">
              <h3 className="h3Match">Mes matchs</h3>
            </Link>
            <div className="galleryMatch">
              <div className="profilMatch" />
              <div className="profilMatch" />
              <div className="profilMatch" />
              <div className="profilMatch" />
              <div className="profilMatch" />
            </div>
          </div>
          <Link to="/tenant/roommate-hunt">
            <img
              src="/Tenant/TenantDashbord/heart.svg"
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
              {fav.map((toto) => {
                return (
                  <div className="profilAnnouncements">
                    <img src={`${toto.url}`} alt="imgAccomodation" />
                    <p>
                      {toto.title}
                      <br />
                      {toto.rent}€<br />
                      {toto.district}
                      <br />
                      <br />
                    </p>
                  </div>
                );
              })}
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
    </div>
  );
}
