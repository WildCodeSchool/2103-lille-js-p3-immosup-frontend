import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SHomePage from './style';

export default function HomePage() {
  const [currImg, setCurrImg] = useState(Math.floor(Math.random() * 3) + 1);

  const changeImg = () => {
    if (currImg < 3) {
      setCurrImg(currImg + 1);
    } else {
      setCurrImg(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(changeImg, 8000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <SHomePage carousel={currImg}>
      <header>
        <div className="logo-container">
          <img
            loading="lazy"
            src="/img/logo/logoFull-1.png"
            className="logo"
            alt="logo"
          />
        </div>
        <div className={`carousel img-${currImg}`}>
          <Link to="tenant/dashboard" className="link-dashboard tenant">
            Espace étudiants et jeunes dîplomés
          </Link>
          <Link to="landlord/dashboard" className="link-dashboard landlord">
            Espace déposeurs d&apos;annonces
          </Link>
        </div>
      </header>
      <div className="infos">
        <section className="info first">
          <h1 className="title">(Futurs) Etudiants ? jeunes diplômés ? </h1>
          <article className="body">
            Tu recherches un logement cool, qui te correspond ? Ou des futurs
            coloc(s) pouvant devenir tes meilleurs potes ou capables de
            supporter ton sale caractère ? Tu es au bon endroit ! <br /> <br />
            IMMO’SUP, c’est la première plateforme dédiée à l’immobilier
            étudiant & jeune diplômé, pensée par une jeune diplômée experte en
            immobilier. <br />
            <br /> Logements en location, en colocation, avec ou sans
            colocataires… Il te suffit de remplir tes critères de recherche pour
            trouver ton logement et/ou ton/tes futur(s) coloc(s) ! <br />
            <br />
            Si à l’inverse tu recherches un profil pour compléter ta colocation
            actuelle, dépose gratuitement une annonce via l’espace « déposeurs
            d’annonces »*. <br /> <br /> En complément, tu peux aussi t’informer
            via des documents pdf, des podcasts ou vidéos sur des points clés
            liés à l’immobilier. De quoi être au top pour trouver le lieu de vie
            de tes rêves !
          </article>
        </section>
        <section className="info second">
          <h1 className="title">
            Particulier ? Investisseurs locatifs ? <br /> Agences immobilières ?
          </h1>
          <article className="body">
            IMMO’SUP est la première plateforme dédiée à l’immobilier étudiant &
            jeune diplômé, pensée par une jeune diplômée experte en immobilier.
            <br /> <br />
            Fiabilité, conseil et innovation. Ce sont les valeurs d’IMMO’SUP.
            <br /> <br />
            Grâce aux profils vérifiés, on dit au revoir aux « faux intéressés »
            et on gagne du temps pour la rédaction des dossiers !
            <br /> <br />
            Déposer gratuitement vos deux premières annonces de logement, ou
            rendez-vous dans l espace « déposeurs d’annonces » pour les
            professionnels qui ont besoin de plus.
            <br /> <br />
            Sur IMMO’SUP, vous pouvez également vous informer sur des points
            clés liés à la (co)location : nouvelles normes locatives,
            défiscalisation, actualités… De quoi être sans cesse à jour dans ce
            domaine qui demande rigueur et implication.
          </article>
        </section>
      </div>
    </SHomePage>
  );
}
