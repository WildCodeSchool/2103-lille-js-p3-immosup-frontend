import { useContext } from 'react';
import { Link } from 'react-router-dom';
import User from '../../../contexts/UserInfos';
import STenantDashboard, { SProfil } from './style';

export default function TenantDashboard() {
  const { userInfos, setUserInfos } = useContext(User);

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
          <Link to="/tenant/announcements-save">
            <h3 className="h3Announcements">Mes annonces sauvegardées</h3>
          </Link>
          <div className="galleryAnnouncements">
            <div className="profilAnnouncements" />
            <div className="profilAnnouncements" />
            <div className="profilAnnouncements" />
            <div className="profilAnnouncements" />
            <div className="profilAnnouncements" />
          </div>
        </div>
        <Link to="/tenant/dashboard">
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
