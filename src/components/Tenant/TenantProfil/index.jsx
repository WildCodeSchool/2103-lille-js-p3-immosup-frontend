import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserInfos from '../../../contexts/UserInfos';
import NavBar from '../../NavBar';
import SProfil from './style';

export default function TenantProfil() {
  const history = useHistory();
  const { userInfos } = useContext(UserInfos);

  return (
    <>
      <NavBar />
      <SProfil>
        <h1 className="title-page">Mon profil</h1>
        <div className="part profil">
          <div className="part-content">
            <img
              className="avatar"
              // NEED TO CHANGE DEFAULT IMG
              src={userInfos?.url || '/img/carousel/carousel-1.jpg'}
              alt="avatar"
            />
            <p className="name">
              {!userInfos
                ? "Vous n'êtes pas connecté"
                : `${userInfos.firstname} ${userInfos.name}`}
            </p>
          </div>
        </div>
        {userInfos && (
          <div className="connected-parts">
            <div className="parts first">
              <div className="part about">
                <h2>À propos</h2>
                <section>
                  <img
                    className="picto"
                    src="/img/pictos/picto-age.svg"
                    alt="age"
                  />
                  <div className="content">
                    <h3>Age</h3>
                    <p>{userInfos.age || '-'}</p>
                  </div>
                </section>
                <section>
                  <img
                    className="picto"
                    src="/img/pictos/picto-location.svg"
                    alt="age"
                  />
                  <div className="content">
                    <h3>Localisation</h3>
                    <p>{userInfos.city || '-'}</p>
                  </div>
                </section>
                <section>
                  <img
                    className="picto"
                    src="/img/pictos/picto-email.svg"
                    alt="age"
                  />
                  <div className="content">
                    <h3>Mail</h3>
                    <p>{userInfos.email || '-'}</p>
                  </div>
                </section>
                <section>
                  <img
                    className="picto"
                    src="/img/pictos/picto-phone.svg"
                    alt="age"
                  />
                  <div className="content">
                    <h3>Téléphone</h3>
                    <p>{userInfos.telephone || '-'}</p>
                  </div>
                </section>
              </div>
            </div>
            <div className="parts second">
              <div className="part bio">
                <h2>Bio</h2>
                <p>{userInfos.aboutme || "Vous n'avez pas de bio."}</p>
              </div>
              <div className="part hobbies">
                <h2>Hobbies</h2>
                {!userInfos.hobbies ? (
                  <p>Vous n&apos;avez pas de hobbies.</p>
                ) : (
                  <ul>
                    {userInfos.hobbies.split(';').map((hobbie) => {
                      return (
                        <li key={hobbie}>
                          <p>{`• ${hobbie}`}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="buttons">
          {!userInfos ? (
            <button
              className="btn login"
              type="button"
              onClick={() => {
                history.push('/login');
              }}
            >
              <p className="btn-text">Login</p>
              <svg className="btn-icon" viewBox="0 0 24 24">
                <rect fill="none" />
                <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
              </svg>
            </button>
          ) : (
            <button className="btn modif" type="button">
              <p className="btn-text">Modifier</p>
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
              </svg>
            </button>
          )}
        </div>
      </SProfil>
    </>
  );
}
