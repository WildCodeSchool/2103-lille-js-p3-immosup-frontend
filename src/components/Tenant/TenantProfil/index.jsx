import axios from 'axios';
import { useContext, useState } from 'react';
import UserInfos from '../../../contexts/UserInfos';
import NavBar from '../../NavBar';
import SProfil from './style';

export default function TenantProfil() {
  const { userInfos, setUserInfos } = useContext(UserInfos);
  const [edit, setEdit] = useState(false);
  const [updateUser, setUpdateUser] = useState({});

  const handleEdit = () => {
    if (!edit) {
      setUpdateUser(userInfos);
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  const putInfos = (body) => {
    axios
      .put(`http://localhost:5050/api/users/${userInfos.id}`, body)
      .then(({ data }) => {
        setUserInfos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveInfos = () => {
    putInfos({
      name: updateUser.name,
      firstname: updateUser.firstname,
      aboutme: updateUser.aboutme,
      email: updateUser.email,
      telephone: updateUser.telephone,
      age: updateUser.age ? parseInt(updateUser.age, 10) : 0,
      city: updateUser.city,
      hobbies: updateUser.hobbies,
    });
    handleEdit();
  };

  return (
    <>
      <NavBar />
      <SProfil>
        <h1 className="profil-title">Mon profil</h1>
        {!userInfos ? (
          <p>non connecté</p>
        ) : (
          <>
            <div className="profil-content">
              <button
                className={`edit ${!edit ? 'open' : 'close'}`}
                type="button"
                onClick={handleEdit}
              >
                {!edit ? (
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#fff"
                  >
                    <rect
                      x="17.469"
                      y="222.239"
                      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -121.8772 249.4323)"
                      width="445.367"
                      height="99.192"
                    />
                    <path d="M507.203,51.778L460.222,4.796c-6.394-6.394-16.762-6.394-23.156,0l-39.769,39.769l70.138,70.138l39.769-39.769C513.599,68.54,513.599,58.172,507.203,51.778z" />
                    <path d="M21.474,437.528l-20.315,52.11c-5.179,13.286,7.918,26.383,21.203,21.203l52.108-20.317L21.474,437.528z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                )}
              </button>
              <section id="top">
                <div className="avatar">
                  <img
                    className="avatar-content"
                    src={userInfos.url}
                    alt="avatar"
                  />
                </div>
                <div className="infos">
                  <div>
                    <h2 className="row">Nom :</h2>
                    {!edit ? (
                      <p className="row">&nbsp;{userInfos.name}</p>
                    ) : (
                      <input
                        type="text"
                        className="textbox name"
                        maxLength="64"
                        value={updateUser.name}
                        onChange={(e) => {
                          setUpdateUser({
                            ...updateUser,
                            name: e.target.value,
                          });
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="row">Prénom :</h2>
                    {!edit ? (
                      <p className="row">&nbsp;{userInfos.firstname}</p>
                    ) : (
                      <input
                        type="text"
                        className="textbox firstname"
                        maxLength="32"
                        value={updateUser.firstname}
                        onChange={(e) => {
                          setUpdateUser({
                            ...updateUser,
                            firstname: e.target.value,
                          });
                        }}
                      />
                    )}
                  </div>
                </div>
              </section>
              <section id="middle">
                <div className="description">
                  <h2>Description</h2>
                  {!edit ? (
                    <p>{userInfos.aboutme || ''}</p>
                  ) : (
                    <textarea
                      type="text"
                      className="textbox aboutme"
                      maxLength="256"
                      value={updateUser.aboutme}
                      onChange={(e) => {
                        setUpdateUser({
                          ...updateUser,
                          aboutme: e.target.value,
                        });
                      }}
                    />
                  )}
                </div>
                <div>
                  <div className="mail">
                    <h2>Mail</h2>
                    {!edit ? (
                      <p>{userInfos.email}</p>
                    ) : (
                      <input
                        type="email"
                        className="textbox email"
                        maxLength="64"
                        value={updateUser.email}
                        onChange={(e) => {
                          setUpdateUser({
                            ...updateUser,
                            email: e.target.value,
                          });
                        }}
                      />
                    )}
                  </div>
                  <div className="phone">
                    <h2>Téléphone</h2>
                    {!edit ? (
                      <p>{userInfos.telephone}</p>
                    ) : (
                      <input
                        type="text"
                        className="textbox phone"
                        maxLength="32"
                        value={updateUser.telephone}
                        onChange={(e) => {
                          setUpdateUser({
                            ...updateUser,
                            telephone: e.target.value,
                          });
                        }}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <div className="age-city">
                    <div className="age">
                      <h2 className="row">Age :</h2>
                      {!edit ? (
                        <p className="row">&nbsp;{userInfos.age}</p>
                      ) : (
                        <input
                          type="number"
                          className="textbox age"
                          value={updateUser.age}
                          onChange={(e) => {
                            setUpdateUser({
                              ...updateUser,
                              age: e.target.value,
                            });
                          }}
                        />
                      )}
                    </div>
                    <div className="city">
                      <h2 className="row">Ville :</h2>
                      {!edit ? (
                        <p className="row">&nbsp;{userInfos.city}</p>
                      ) : (
                        <input
                          type="text"
                          className="textbox city"
                          maxLength="32"
                          value={updateUser.city}
                          onChange={(e) => {
                            setUpdateUser({
                              ...updateUser,
                              city: e.target.value,
                            });
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </section>
              <section id="bottom">
                <div className="hobbies">
                  <h2>Hobbies</h2>
                  {!edit ? (
                    <p>{userInfos.hobbies}</p>
                  ) : (
                    <input
                      type="text"
                      className="textbox hobbies"
                      maxLength="256"
                      value={updateUser.hobbies}
                      onChange={(e) => {
                        setUpdateUser({
                          ...updateUser,
                          hobbies: e.target.value,
                        });
                      }}
                    />
                  )}
                </div>
                <div className="account" />
              </section>
              {edit && (
                <div className="buttons">
                  <button
                    type="button"
                    className="edit-button save"
                    onClick={saveInfos}
                  >
                    Sauvegarder
                  </button>
                  <button
                    type="button"
                    className="edit-button cancel"
                    onClick={handleEdit}
                  >
                    Annuler
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </SProfil>
    </>
  );
}
