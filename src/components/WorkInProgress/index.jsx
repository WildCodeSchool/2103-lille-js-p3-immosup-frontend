import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SWorkInProgress from './style';

const txt = (
  <>
    <p>
      Impatient(e) de trouver ton futur logement et/ou tes futurs colocs ? La
      plateforme est en cours de création et sera bientôt en ligne... Renseigne
      ton adresse mail en{' '}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3vqFsT7yH9YFVNQi_qzZznzQiJLNin1zeHHPJiLn24iXWvQ/viewform?usp=sf_link">
        cliquant ici
      </a>{' '}
      pour être notifié(e) du top départ !
    </p>
    <p>
      De notre côté, nous continuons de mettre au point des solutions répondants
      à tes besoins.
    </p>
    <p>L&apos;équipe IMMO&apos;SUP</p>
  </>
);
const txtLandlord = (
  <>
    <p>
      Professionnels comme particuliers, vous êtes impatient(e) de déposer vos
      premières annonces ? La plateforme est en cours de création et sera
      bientôt en ligne... Renseignez votre adresse mail en{' '}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9u-Vcw7eEUPKoQ1Wx4GbV78JAdWEzuaAdPAnicwCV2wwDxQ/viewform?usp=sf_link">
        cliquant ici
      </a>{' '}
      pour être notifié(e) lors du lancement !
    </p>
    <p>
      De notre côté, nous continuons de mettre au point des solutions répondants
      à vos besoins.
    </p>
    <p>L&apos;équipe IMMO&apos;SUP</p>
  </>
);

const WorkInProgress = ({ landlord }) => {
  return (
    <SWorkInProgress>
      <div className="container">
        <img
          src="/image/road-work.svg"
          alt="En travaux"
          title="WorkInProgress"
          className="imgDisconnected"
        />
        <h2>Application en cours de développement</h2>
        {landlord ? txtLandlord : txt}
        <Link to="/">
          <img src="/image/close.svg" alt="close" className="close" />
        </Link>
      </div>
    </SWorkInProgress>
  );
};

WorkInProgress.propTypes = {
  landlord: PropTypes.bool.isRequired,
};

export default WorkInProgress;
