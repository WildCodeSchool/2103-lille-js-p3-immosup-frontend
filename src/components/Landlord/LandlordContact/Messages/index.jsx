import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SMessages from './style';
import SButton from '../../../styled/SButton';
import request from '../../../../utilities/request';

export default function Message() {
  const { idReceiver } = useParams();
  const [messages, setMessage] = useState(null);
  const [idUser] = useState('1');
  const [inputContent, setContent] = useState('');

  const handleChangeContent = (evt) => {
    setContent(evt.target.value);
  };

  const getMessages = () => {
    request({
      method: 'get',
      url: `/contacts/messages/${idUser}/${idReceiver}`,
    }).then(({ data }) => {
      setMessage(data);
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputContent !== '') {
      const aEnvoyer = {
        content: inputContent,
        idSender: idUser,
        idReceiver,
      };
      axios.post(`http://localhost:5002/contacts/messages`, aEnvoyer);
      setContent('');
    }
  };

  useEffect(() => {
    const interval = setInterval(getMessages, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SMessages>
      <div className="contain">
        <hr />
        {messages &&
          messages.map((message) => {
            const ownerMessage =
              `${message.id_sender}` === idUser ? 'me' : 'other';
            return (
              <div key={message.id} className={`message ${ownerMessage}`}>
                {message.content}
              </div>
            );
          })}
        <form onSubmit={handleSubmit}>
          <textarea
            className="input"
            type="text"
            value={inputContent}
            onChange={handleChangeContent}
            placeholder="Ecrire ici "
          />
          <SButton className="button">
            <p className="btn-text">Send</p>
          </SButton>
        </form>
      </div>
    </SMessages>
  );
}
