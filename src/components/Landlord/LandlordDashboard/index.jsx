import { Link } from 'react-router-dom';
import { useContext } from 'react';
import User from '../../../contexts/UserInfos';
import SLandlordDashboard from './style';
import LandlordAd from '../../../pages/LandlordAd';

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
            <span className="userName">
              {userInfos?.firstname || 'Utilisateur'}
            </span>
          </h3>
        </section>
        <section className="navigation">
          <div>
            <Link to="/tenant/profil"> Mon profil</Link>
          </div>
          <div>
            <Link to="/landlord/contacts">Mes contacts</Link>
          </div>
          <div>
            <Link to="/landlord/dashboard/buycredits">Acheter des crédits</Link>
          </div>
        </section>

        <section className="annonce">
          <Link to="/landlord/dashboard/annoucement" className="linkAnnonce">
            Mes annonces
          </Link>

          <div className="annonce">{userInfos && <LandlordAd />}</div>

          <div className="buttonAdd">
            <Link to="/landlord/addannonce">+</Link>
          </div>
        </section>
      </SLandlordDashboard>
    </>
  );
}
