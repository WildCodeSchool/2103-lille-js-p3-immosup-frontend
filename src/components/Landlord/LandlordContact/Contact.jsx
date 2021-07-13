import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import request from '../../../utilities/request';

export default function Contact({ idSender }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    request({ method: 'get', url: `/users/id/${idSender}` }).then(
      ({ data }) => {
        setUser(data);
      }
    );
  }, []);
  return (
    user && (
      <div className="icon">
        <img src={user.avatar_url} alt="icon" />
        <div className="text">
          <p>
            <span className="first-word">
              {user.firstname} {user.lastname}
            </span>
          </p>
        </div>
      </div>
    )
  );
}

Contact.propTypes = {
  idSender: PropTypes.number.isRequired,
};
