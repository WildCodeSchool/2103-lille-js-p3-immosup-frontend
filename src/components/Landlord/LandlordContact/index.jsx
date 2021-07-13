import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import request from '../../../utilities/request';
import SLandlordContacts from './style';
import Contact from './Contact';

export default function LandlordContacts() {
  const [contacts, setContacts] = useState([]);
  const [userInfos] = useState({ id: 1 });
  const { idReceiver } = useParams();

  useEffect(() => {
    request({ method: 'get', url: `/contacts/${userInfos.id}` }).then(
      ({ data }) => {
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
            contacts.map((contact, index) => {
              return (
                <div key={index.toString()}>
                  <Link to={`/landlord/messages/${idReceiver}`}>
                    <Contact idSender={contact.id_sender} />
                  </Link>
                </div>
              );
            })}
        </div>
      </SLandlordContacts>
    </div>
  );
}
