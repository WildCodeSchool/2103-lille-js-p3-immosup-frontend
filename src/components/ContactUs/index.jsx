import { useState } from 'react';
import axios from 'axios';
import SContactUs from './style';

export default function ContactUs() {
  const [expeditor, setExpeditor] = useState('');
  const [body, setBody] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5050/access', {
      email: expeditor,
      message: body,
    });
    setIsSent(true);
  };

  return (
    <SContactUs>
      <div className="content">
        <h2>Contact</h2>

        {!isSent ? (
          <form className="contactUs" onSubmit={handleSubmit}>
            <label htmlFor="username">
              <h3>Utilisateur/trice</h3>
              <input placeholder="Nom" name="firstname" id="field" />
            </label>

            <label htmlFor="email">
              <h3>Email</h3>
              <input
                placeholder="votre@mail.com"
                name="email"
                id="field"
                value={expeditor}
                onChange={(e) => {
                  setExpeditor(e.target.value);
                }}
              />
            </label>

            <label htmlFor="message">
              <h3>Message</h3>
              <textarea
                className="text"
                type="textarea"
                name="textValue"
                id="field"
                placeholder="Votre message"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </label>

            <button type="submit" className="buttonNotSent">
              Envoyer
            </button>
          </form>
        ) : (
          <button type="submit" disabled className="buttonSent">
            Envoyé
          </button>
        )}
      </div>
    </SContactUs>
  );
}
