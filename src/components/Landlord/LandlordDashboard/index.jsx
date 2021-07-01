import { Link } from 'react-router-dom';
import SLandlordDashboard from './style';

export default function LandlordDashboard() {
  return (
    <SLandlordDashboard>
      <h2>Tableau de bord</h2>
      <div className="personal">
        <div className="user">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/t1/550980-utilisateur-icone-vecteur-gratuit-vectoriel.jpg"
            alt="Avatar"
          />
          <h3>
            Bienvenue <br />
            Nom de l&apos;utilisateur
          </h3>
        </div>

        <Link to="/landlord/dashboard/profil">
          <div className="profil"> Mon profil </div>
        </Link>

        <div className="disconnected">
          <img
            src="https://icones.pro/wp-content/uploads/2021/05/icone-connexion-grise.png"
            alt="Disconnected"
          />
        </div>
      </div>

      <div className="navigation">
        <div className="announcement">
          <h3>
            <Link to="/landlord/dashboard/annoucement">Mes annonces</Link>{' '}
          </h3>
          <div className="bloc">
            <div className="housing">
              <img
                src="https://i.pinimg.com/originals/ae/91/73/ae917300d4e1c1fae700029d998ba981.jpg"
                alt="Housing"
              />
              <div className="housingDescription">
                <h5>Titre</h5>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, in! Reiciendis corporis ipsum, facilis illum enim
                  libero dolor assumenda sapiente quos non aut impedit? Dolore
                  tempora voluptatum voluptate eum rem.
                </p>
                <br />
                <h5>Prix</h5>
              </div>
            </div>
            <div className="bloc2">
              <div className="housingPlus">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <Link to="/landlord/dashboard/contact">
            <div className="contact"> Mes contact </div>
          </Link>

          <Link to="/landlord/dashboard/buycredits">
            <div className="buyCredits">Acheter des crédits </div>
          </Link>
        </div>
      </div>
    </SLandlordDashboard>
  );
}
