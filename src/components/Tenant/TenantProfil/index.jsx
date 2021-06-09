import { useEffect, useState } from 'react';
import axios from 'axios';
import SProfil from './style';

export default function TenantProfil() {
  const [user, setUser] = useState({
    firstname: 'toto',
  });
  const [firstname, SetFirstName] = useState('toto');

  useEffect(() => {
    axios.get('http://localhost:5050/api/users/1').then(({ data }) => {
      console.log(data[0]);
      setUser(data[0]);
    });
  }, []);
  return (
    <SProfil>
      <p>{user.firstname}</p>
      <img src={user.url} alt="avatar" />
      <form
        onSubmit={() => {
          axios
            .put('http://localhost:5050/api/users/1', { firstname })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        <input
          type="text"
          value={firstname}
          onChange={(e) => {
            SetFirstName(e.target.value);
          }}
        />
      </form>
    </SProfil>
  );
}
