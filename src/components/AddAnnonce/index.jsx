import Addannoncestyle from './style';

export default function AddAnnonce() {
  return (
    <Addannoncestyle>
      <form action="/data" method="post">
        <label htmlFor="test">
          Titre
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Catégorie:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Type de bien:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Meublé ou non:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Classe énergie:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Gaz a effet serre:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Nombre de pièces:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Nombre de metres carrés:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Prix:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>

      <form action="/data" method="post">
        <label htmlFor="test">
          Description:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          Photo
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
        <input type="file" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          localisation:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <form action="/data" method="post">
        <label htmlFor="test">
          coordonées:
          <input type="text" name="name" id="test" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </Addannoncestyle>
  );
}
