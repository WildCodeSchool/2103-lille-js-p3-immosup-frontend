import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import UserInfos from '../../../../contexts/UserInfos';
import sendRequest from '../../../../utilities/sendRequest';
import SModalProfil from './style';

export default function ModalProfil({ updateInfos, setUpdateInfos, setEdit }) {
  const { userInfos, setUserInfos } = useContext(UserInfos);

  const isNumber = (str) => /^[0-9]+$/.test(str);

  const checkNbChar = (str, nb) => str.length <= nb;

  const closeModal = () => setEdit(false);

  const handleClick = (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  };

  const handleReset = () => {
    setUpdateInfos(null);
    closeModal();
  };

  const putUpdateInfos = async () => {
    try {
      const res = await sendRequest({
        method: 'put',
        url: `/users/${userInfos.id}`,
        data: updateInfos,
      });
      setUserInfos(res);
      handleReset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putUpdateInfos();
  };

  useEffect(() => {
    if (!updateInfos) {
      setUpdateInfos({
        firstname: userInfos.firstname,
        name: userInfos.name,
        aboutme: userInfos.aboutme,
        age: userInfos.age,
        city: userInfos.city,
        email: userInfos.email,
        telephone: userInfos.telephone,
      });
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    updateInfos && (
      <SModalProfil id="modal">
        <div className="modal-content">
          <button className="btn-close" type="button" onClick={handleReset}>
            <svg className="icon-close" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
            </svg>
          </button>
          <h1 className="title-modal">Modifier le profil</h1>
          <form onSubmit={handleSubmit}>
            <div className="form firstname">
              <h2>Prénom</h2>
              <input
                className="input firstname"
                type="text"
                maxLength="32"
                value={updateInfos.firstname}
                onChange={(e) => {
                  if (checkNbChar(e.target.value, 32)) {
                    setUpdateInfos({
                      ...updateInfos,
                      firstname: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="form lastname">
              <h2>Nom</h2>
              <input
                className="input lastname"
                type="text"
                maxLength="64"
                value={updateInfos.name}
                onChange={(e) => {
                  if (checkNbChar(e.target.value, 64)) {
                    setUpdateInfos({
                      ...updateInfos,
                      name: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="form bio">
              <h2>Bio</h2>
              <textarea
                className="textarea bio"
                type="text"
                maxLength="256"
                value={updateInfos.aboutme}
                onChange={(e) => {
                  if (checkNbChar(e.target.value, 256)) {
                    setUpdateInfos({
                      ...updateInfos,
                      aboutme: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="form age">
              <h2>Age</h2>
              <input
                className="input age"
                type="text"
                maxLength="3"
                value={updateInfos.age}
                onChange={(e) => {
                  if (
                    (e.target.value === '' || isNumber(e.target.value)) &&
                    checkNbChar(e.target.value, 3)
                  ) {
                    setUpdateInfos({
                      ...updateInfos,
                      age: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="form location">
              <h2>Ville</h2>
              <input
                className="input location"
                type="text"
                maxLength="32"
                value={updateInfos.city}
                onChange={(e) => {
                  if (checkNbChar(e.target.value, 32)) {
                    setUpdateInfos({
                      ...updateInfos,
                      city: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="form email">
              <h2>Mail</h2>
              <input
                className="input email"
                type="email"
                maxLength="64"
                value={updateInfos.email}
                onChange={(e) => {
                  if (checkNbChar(e.target.value, 64)) {
                    setUpdateInfos({
                      ...updateInfos,
                      email: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="form phone">
              <h2>Téléphone</h2>
              <input
                className="input phone"
                type="text"
                maxLength="20"
                value={updateInfos.telephone}
                onChange={(e) => {
                  if (
                    (e.target.value === '' || isNumber(e.target.value)) &&
                    checkNbChar(e.target.value, 20)
                  ) {
                    setUpdateInfos({
                      ...updateInfos,
                      telephone: e.target.value,
                    });
                  }
                }}
              />
            </div>
            <div className="buttons">
              <button className="btn save" type="submit">
                <p className="btn-text">Enregistrer</p>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
                </svg>
              </button>
              <button
                className="btn cancel"
                type="button"
                onClick={handleReset}
              >
                <p className="btn-text">Annuler</p>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </SModalProfil>
    )
  );
}

ModalProfil.propTypes = {
  updateInfos: PropTypes.shape({
    firstname: PropTypes.string,
    name: PropTypes.string,
    aboutme: PropTypes.string,
    age: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
  }),
  setUpdateInfos: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
};

ModalProfil.defaultProps = {
  updateInfos: {},
};
