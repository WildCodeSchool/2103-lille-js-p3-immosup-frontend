import { Link } from 'react-router-dom';
import SNavBar from './style';

export default function NavBar() {
  return (
    <SNavBar>
      <Link to="/" className="link immosup">
        IMMO’SUP
      </Link>
      <Link to="/signup" className="link signup">
        <img
          src="/img/icons/account_circle_black_48dp.svg"
          alt="Tableau de bord"
        />
      </Link>
    </SNavBar>
  );
}
