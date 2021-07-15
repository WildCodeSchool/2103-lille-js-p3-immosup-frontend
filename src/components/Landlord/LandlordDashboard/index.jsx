import { Link } from 'react-router-dom';
import { useContext } from 'react';
import User from '../../../contexts/UserInfos';
import SLandlordDashboard from './style';

export default function LandlordDashboard() {
  const { userInfos } = useContext(User);

  return (
    <>
      <SLandlordDashboard>
        <h1>Tableau de bord</h1>
        <section className="personalInfo">
          <img
            src={userInfos?.avatarUrl || '/image/IconeProfilNoir.png'}
            alt="Avatar"
          />
          <h3>
            Bienvenue <br />
            {userInfos?.firstname || 'Utilisateur'}
          </h3>
        </section>
        <section className="navigation">
          <Link to="/landlord/dashboard/profil"> Mon profil</Link>
          <Link to="/landlord/dashboard/contact">Mes contacts</Link>
          <Link to="/landlord/dashboard/buycredits">Acheter des crédits</Link>
        </section>

        <section className="annonce">
          <div className="announcement">
            <h3>
              <Link to="/landlord/dashboard/annoucement">Mes annonces</Link>
            </h3>
            {/* inclure annnonce list */}
            <button type="button">+</button>
          </div>
        </section>
      </SLandlordDashboard>
    </>
  );
}
