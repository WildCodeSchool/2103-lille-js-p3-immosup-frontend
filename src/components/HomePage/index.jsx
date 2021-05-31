import { Link } from 'react-router-dom';
import SHomePage from './style';

export default function HomePage() {
  return (
    <SHomePage>
      <Link to="tenant/dashboard">Espace étudiants et jeunes dîplomés</Link>
      <Link to="landlord/dashboard">Espace déposeurs d&apos;annonces</Link>
    </SHomePage>
  );
}
