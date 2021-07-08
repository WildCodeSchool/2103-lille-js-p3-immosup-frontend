import SAnnonce from './style';

const annonces = ['annonceLille', 'annonceLille2'];

function AnnoncesFilter() {
  return (
    <SAnnonce>
      <div className="FilterAnnonce">
        <h1>Recherche de Logement</h1>
        <section className="gallery">
          {annonces.map((annonce) => {
            return <annonceTest charname={annonce} />;
          })}
        </section>
      </div>
    </SAnnonce>
  );
}

export default AnnoncesFilter;
