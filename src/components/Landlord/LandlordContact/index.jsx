import { useState, useEffect } from 'react';
import request from '../../../utilities/request';
import SLandlordContacts from './style';
import Contact from './Contact';

export default function LandlordContacts() {
  const [contacts, setContacts] = useState([]);
  const [userInfos] = useState({ id: 1 });

  useEffect(() => {
    request({ method: 'get', url: `/contacts/${userInfos.id}` }).then(
      ({ data }) => {
        console.log(data);
        setContacts(data);
      }
    );
  }, []);

  return (
    <div className="profil">
      <SLandlordContacts>
        <h2>Mes Contacts</h2>
        <div className="icons">
          {contacts &&
            contacts.map((contact) => {
              return (
                <>
                  {/*  <Link to="/landlord/messages/"> */}
                  <Contact idSender={contact.id_sender} />
                  {/*  </Link> */}
                </>
              );
            })}
        </div>
      </SLandlordContacts>
    </div>
  );
}
