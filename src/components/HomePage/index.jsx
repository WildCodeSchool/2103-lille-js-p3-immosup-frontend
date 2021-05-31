import { Link } from 'react-router-dom';
import './style.scss';

export default function HomePage() {
  return (
    <div className="HomePage">
      <Link to="tenant/dashboard">Espace étudiants et jeunes dîplomés</Link>
      <Link to="landlord/dashboard">Espace déposeurs d&apos;annonces</Link>
    </div>
  );
}
