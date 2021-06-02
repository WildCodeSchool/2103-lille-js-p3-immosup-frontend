import { Link } from 'react-router-dom';
import SHomePage from './style';

export default function HomePage() {
  return (
    <SHomePage>
      <header>
        <div className="logo-container">
          <img src="/img/logo/logoFull-1.png" className="logo" alt="logo" />
        </div>
        <div className="carousel">
          <Link to="tenant/dashboard" className="link-dashboard tenant">
            Espace étudiants et jeunes dîplomés
          </Link>
          <Link to="landlord/dashboard" className="link-dashboard landlord">
            Espace déposeurs d&apos;annonces
          </Link>
        </div>
      </header>
    </SHomePage>
  );
}
