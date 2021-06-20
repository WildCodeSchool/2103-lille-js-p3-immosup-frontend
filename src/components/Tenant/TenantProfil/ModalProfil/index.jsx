import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import UserInfos from '../../../../contexts/UserInfos';
import SModalProfil from './style';

export default function ModalProfil({ setEdit }) {
  const { userInfos } = useContext(UserInfos);

  console.log(userInfos);

  const closeModal = () => {
    setEdit(false);
  };

  const handleClick = (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <SModalProfil id="modal">
      <div className="modal-content">
        <button className="btn-close" type="button" onClick={closeModal}>
          <svg className="icon-close" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
          </svg>
        </button>
        <h1 className="title-modal">Modifier le profil</h1>
        <form onSubmit={handleSubmit}>
          <div className="form firstname">
            <h2>Prénom</h2>
            <input className="input firstname" type="text" maxLength="32" />
          </div>
          <div className="form lastname">
            <h2>Nom</h2>
            <input className="input lastname" type="text" maxLength="64" />
          </div>
          <div className="form bio">
            <h2>Bio</h2>
            <textarea className="textarea bio" type="text" maxLength="256" />
          </div>
          <div className="form age">
            <h2>Age</h2>
            <input className="input age" type="text" maxLength="3" />
          </div>
          <div className="form location">
            <h2>Ville</h2>
            <input className="input location" type="text" maxLength="32" />
          </div>
          <div className="form email">
            <h2>Mail</h2>
            <input className="input email" type="email" maxLength="64" />
          </div>
          <div className="form phone">
            <h2>Téléphone</h2>
            <input className="input phone" type="text" maxLength="20" />
          </div>
          <div className="buttons">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </SModalProfil>
  );
}

ModalProfil.propTypes = {
  setEdit: PropTypes.func.isRequired,
};
