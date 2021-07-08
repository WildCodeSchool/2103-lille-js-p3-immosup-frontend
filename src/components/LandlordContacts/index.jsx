/* import { useState, useEffect } from 'react';
import axios from 'axios'; */
import SLandlordContacts from './style';

export default function LandlordContacts() {
  /*   const [contacts, setContact] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5002/contacts`).then(({ data }) => {
      setContact(data);
    });
  }, []); */

  return (
    <div className="profil">
      <SLandlordContacts>
        <h2>Mes Contacts</h2>
        {/*  {contacts.map((contact) => {
          return ( */}
        <div className="icons">
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie Dupont</span> - 3eme année{' '}
                <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
        </div>
        );
        {/* })} */}
      </SLandlordContacts>
    </div>
  );
}

/* <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span>- 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
          <div className="icon">
            <img
              src="https://img.ohmymag.com/article/international/l-ideal-du-visage-feminin-en-roumanie_2b8f1e748b67d8b64e985bec274a664cc2c8a0b5.jpg"
              alt="icon"
            />
            <div className="text">
              <p>
                <span className="first-word">Noémie</span> - 3eme année <br />
                MJM Design Graphic
              </p>
            </div>
          </div>
        </div> */
