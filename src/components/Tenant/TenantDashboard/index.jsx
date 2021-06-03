import { Link } from 'react-router-dom';
import STenantDashboard from './style';

export default function TenantDashboard() {
  return (
    <STenantDashboard>
      <h2>Tableau de bord</h2>

      <div className="personal">
        <div className="user">
          <img
            src="/Tenant/TenantDashbord/account_circle.png"
            alt="avatar"
            className="imgAvatar"
          />
          <h3 className="h3User">
            Bienvenue
            <br />
            Nom de l&apos;utilisateur
          </h3>
        </div>

        <Link to="/tenant/profil" className="buttonProfil">
          <h3 className="h3Profil">Mon Profile</h3>
        </Link>

        <Link to="/tenant/criteria" className="buttonCriteria">
          <h3 className="h3Criteria">Mes Critères</h3>
        </Link>

        <Link to="/" className="buttonDisconnected">
          <img
            src="/Tenant/TenantDashbord/logout_black_48dp.svg"
            alt="Disconnected"
            className="imgDisconnected"
          />
        </Link>
      </div>

      <div>
        <Link to="/tenant/match">Mes Matchs</Link>
        <Link to="/tenant/roommate-hunt">Roommate hunt</Link>
      </div>

      <div>
        <Link to="/tenant/announcements-save">Announcements save</Link>
        <Link to="/tenant/housing-search">Housing search</Link>
      </div>
    </STenantDashboard>
  );
}
