import PropTypes from 'prop-types';
import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import UserInfos from '../../../../contexts/UserInfos';
import request from '../../../../utilities/request';
import SButton from '../../../styled/SButton';
import SModalProfil from './style';

export default function ModalProfil({ updateInfos, setUpdateInfos, setEdit }) {
  const { userInfos, setUserInfos } = useContext(UserInfos);

  const isNumber = (str) => /^[0-9]+$/.test(str);

  const checkNbChar = (str, nb) => str.length <= nb;

  const closeModal = () => setEdit(false);

  const formatHobbies = (hobbies) =>
    hobbies.filter((hobbie) => hobbie !== '').join(';-;');

  const handleClick = (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  };

  const handleChange = (e, nbChar, isNb) => {
    let sendUpdate = true;

    if (nbChar) {
      sendUpdate = checkNbChar(e.target.value, nbChar);
    }
    if (isNb && sendUpdate) {
      sendUpdate = isNumber(e.target.value);
    }
    if (sendUpdate) {
      setUpdateInfos({
        ...updateInfos,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleReset = () => {
    setUpdateInfos(null);
    closeModal();
  };

  const putUpdateInfos = async () => {
    try {
      const { data } = await request({
        method: 'put',
        url: `/users/${userInfos.id}`,
        data: {
          ...updateInfos,
          hobbies: formatHobbies(updateInfos.hobbies),
        },
      });
      setUserInfos(data);
      handleReset();
      toast.success('Votre profil a été mis à jour', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } catch (err) {
      closeModal();
      toast.error(
        'Une erreur est survenue lors de la mise à jour de votre profil',
        {
          position: 'bottom-right',
          autoClose: 3000,
        }
      );
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
        hobbies: userInfos.hobbies.split(';-;'),
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
                name="firstname"
                value={updateInfos.firstname}
                onChange={(e) => {
                  handleChange(e, 32);
                }}
              />
            </div>
            <div className="form lastname">
              <h2>Nom</h2>
              <input
                className="input lastname"
                type="text"
                maxLength="64"
                name="name"
                value={updateInfos.name}
                onChange={(e) => {
                  handleChange(e, 64);
                }}
              />
            </div>
            <div className="form bio">
              <h2>Bio</h2>
              <textarea
                className="textarea bio"
                type="text"
                maxLength="256"
                name="aboutme"
                value={updateInfos.aboutme}
                onChange={(e) => {
                  handleChange(e, 256);
                }}
              />
            </div>
            <div className="form age">
              <h2>Age</h2>
              <input
                className="input age"
                type="text"
                maxLength="3"
                name="age"
                value={updateInfos.age}
                onChange={(e) => {
                  handleChange(e, 3, true);
                }}
              />
            </div>
            <div className="form location">
              <h2>Ville</h2>
              <input
                className="input location"
                type="text"
                maxLength="32"
                name="city"
                value={updateInfos.city}
                onChange={(e) => {
                  handleChange(e, 32);
                }}
              />
            </div>
            <div className="form email">
              <h2>Mail</h2>
              <input
                className="input email"
                type="email"
                maxLength="64"
                name="email"
                value={updateInfos.email}
                onChange={(e) => {
                  handleChange(e, 64);
                }}
              />
            </div>
            <div className="form phone">
              <h2>Téléphone</h2>
              <input
                className="input phone"
                type="text"
                maxLength="20"
                name="telephone"
                value={updateInfos.telephone}
                onChange={(e) => {
                  handleChange(e, 20, true);
                }}
              />
            </div>
            <div className="form hobbies">
              <h2>Hobbies</h2>
              {updateInfos.hobbies.map((hobbie, index) => {
                return (
                  <div className="hobbies-inputs">
                    <input
                      className="input hobbies"
                      type="text"
                      name="hobbies"
                      value={hobbie}
                      onChange={(e) => {
                        const tmpHobbies = updateInfos.hobbies;

                        tmpHobbies[index] = e.target.value;
                        setUpdateInfos({
                          ...updateInfos,
                          hobbies: tmpHobbies,
                        });
                      }}
                    />
                    <button
                      type="button"
                      className="btn-remove-hobbies"
                      onClick={() => {
                        const tmpHobbies = updateInfos.hobbies;

                        setUpdateInfos({
                          ...updateInfos,
                          hobbies: tmpHobbies.filter(
                            (element, filterIndex) => filterIndex !== index
                          ),
                        });
                      }}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </button>
                  </div>
                );
              })}
              <SButton
                type="button"
                className="btn add"
                onClick={() => {
                  const tmpHobbies = updateInfos.hobbies;

                  if (!tmpHobbies.includes('') && tmpHobbies.length < 5) {
                    tmpHobbies.push('');
                    setUpdateInfos({
                      ...updateInfos,
                      hobbies: tmpHobbies,
                    });
                  }
                }}
              >
                <p className="btn-text">Ajouter</p>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </SButton>
            </div>
            <div className="buttons">
              <SButton className="btn save" type="submit">
                <p className="btn-text">Enregistrer</p>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
                </svg>
              </SButton>
              <SButton
                className="btn cancel"
                type="button"
                color="#e61010"
                onClick={handleReset}
              >
                <p className="btn-text">Annuler</p>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
                </svg>
              </SButton>
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
    hobbies: PropTypes.string,
  }),
  setUpdateInfos: PropTypes.func.isRequired,
  setEdit: PropTypes.func.isRequired,
};

ModalProfil.defaultProps = {
  updateInfos: {},
};
