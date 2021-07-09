/* import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Message() {
  const { id } = useParams();
  const [messages, setMessage] = useState(null);
  const [userInfos] = useState({ id: 1 });

  useEffect(() => {
    request({ method: 'get', url: `/contacts/messages/id/${id}` }).then(
      ({ data }) => {
        console.log(data);
        setUser(data);
      }
    );
  }, []);

  return messages.map((message) => {
    return (
      <div>
        <p> {message.content}</p>
      </div>
    );
  });
}
 */
