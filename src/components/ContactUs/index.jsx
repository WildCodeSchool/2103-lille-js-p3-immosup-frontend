import SContactUs from './style';

// export default function ContactUs() {
//   return (
//     <SContactUs>
//       <h2>Formulaire de contact</h2>
//     </SContactUs>
//   );
// }

// export default function ContcatUs() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SContactUs>
      <div className="content">
        <h2>Formulaire</h2>

        <form className="contactUs" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <h3>Nom d&apos;utilisateur/trice</h3>
            <input placeholder="Nom" name="firstname" id="field" />
          </label>

          <label htmlFor="email">
            <h3>Email</h3>
            <input placeholder="votre@mail.com" name="email" id="field" />
          </label>

          <label htmlFor="message">
            <h3>Message</h3>
            <textarea
              className="text"
              type="textarea"
              name="textValue"
              id="field"
              placeholder="Votre message"
            />
          </label>

          <button type="submit" className="button">
            <h4>Envoyé</h4>
          </button>
        </form>
      </div>
    </SContactUs>
  );
}
