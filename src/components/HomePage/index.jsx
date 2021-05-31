import { Link } from 'react-router-dom';
import './style.scss';

export default function HomePage() {
  return (
    <div className="HomePage">
      <Link to="students">Espace étudiants et jeunes dîplomés</Link>
      <Link to="depositors">Espace déposeurs d&apos;annonces</Link>
    </div>
  );
}
