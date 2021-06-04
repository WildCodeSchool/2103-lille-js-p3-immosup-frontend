import { Link } from 'react-router-dom';
import SFooter from './style';

export default function Footer() {
  return (
    <SFooter>
      <Link to="/" className="link immosup">
        IMMO’SUP
      </Link>
      <div>
        <Link to="/contact-us" className="link contact">
          Contact
        </Link>
        <Link to="legal-information" className="link legal-information">
          Informations légales (CGU)
        </Link>
      </div>
    </SFooter>
  );
}
