import { useState, useEffect } from 'react';
import request from '../../utilities/request';
import SLandlordContacts from './style';

export default function LandlordContacts() {
  const [contacts, setContacts] = useState({});

  /*   useEffect(() => {
    axios.get(`http://localhost:5002/contacts`).then(({ data }) => {
      setContact(data);
    });
  }, []);  */
  useEffect(() => {
    request({ method: 'get', url: '/contacts' }).then(({ data }) => {
      setContacts(data);
    });
  }, []);

  return (
    <div className="profil">
      <SLandlordContacts>
        <h2>Mes Contacts</h2>
        {contacts.map((contact) => {
          return (
            <div className="icons">
              <div className="icon">
                <img src={contact.photo.UrlPic} alt="icon" />
                <div className="text">
                  <p>
                    <span className="first-word">Noémie Dupont</span> - 3eme
                    année <br />
                    MJM Design Graphic
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </SLandlordContacts>
    </div>
  );
}
