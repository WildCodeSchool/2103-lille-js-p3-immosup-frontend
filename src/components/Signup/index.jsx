import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { request } from '../../utilities';
import User from '../../contexts/UserInfos';
import SSignup from './style';
import SButton from '../styled/SButton';

export default function Signup() {
  const { setUserInfos, setUserToken } = useContext(User);
  const [infos, setInfos] = useState({
    gender: 'female',
  });
  const handleInput = (e) => {
    const tmpInfos = {
      ...infos,
    };

    if (!e.target.value) delete tmpInfos[e.target.name];
    else tmpInfos[e.target.name] = e.target.value;
    setInfos(tmpInfos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await request({
        method: 'post',
        url: 'auth/signup',
        data: infos,
      });
      setUserInfos(data.user);
      setUserToken(data.token);
      toast.success('Votre profil a été créé', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } catch (err) {
      toast.error('Création du profil impossible', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  const [signupRules] = useState({
    firstname: [
      {
        reg: /^[a-zA-Z]+$/,
        msg: 'votre prénom ne peut contenir que des lettres',
      },
    ],
  });

  const checkInputs = (inputsName, required = false) => {
    let errorFound = false;

    inputsName.forEach((inputName) => {
      const input = document.querySelector(`.input.${inputName}`);
      const msgsError = [];

      if (!input.value && required) {
        msgsError.push('Champ obligatoire');
      } else {
        signupRules[inputName].forEach((rule) => {
          if (!rule.reg.test(input.value)) msgsError.push(rule.msg);
        });
      }

      let ul = document.querySelector(`.msgs-error.${inputName}`);

      if (msgsError.length) {
        errorFound = true;
        input.style.borderColor = '#d44444';

        if (!ul) {
          ul = document.createElement('ul');
          ul.classList.add('msgs-error', inputName);
        } else {
          ul.innerHTML = '';
        }
        msgsError.forEach((msgError) => {
          const li = document.createElement('li');

          li.innerHTML = msgError;
          ul.appendChild(li);
        });
        document.querySelector(`.part-input.${inputName}`).appendChild(ul);
      } else {
        input.style.borderColor = '#737373';
        if (ul) ul.parentNode.removeChild(ul);
      }
    });

    return errorFound;
  };

  return (
    <SSignup>
      <h1 className="title-page">Créez votre profil</h1>
      <form>
        <div className="part">
          <div className="part-title">
            <svg viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            <h2>Connexion</h2>
          </div>
          <div className="part-input email">
            <h3>
              Email<em className="not-null">*</em>
            </h3>
            <input
              name="email"
              className="input email"
              type="email"
              value={infos.email || ''}
              onChange={handleInput}
            />
          </div>
          <div className="part-input password">
            <h3>
              Password<em className="not-null">*</em>
            </h3>
            <input
              name="password"
              className="input password"
              type="password"
              value={infos.password || ''}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="part">
          <div className="part-title">
            <svg viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h2>Profil</h2>
          </div>
          <div className="part-input firstname">
            <h3>
              Prénom<em className="not-null">*</em>
            </h3>
            <input
              name="firstname"
              className="input firstname"
              type="text"
              value={infos.firstname || ''}
              onChange={handleInput}
              onBlur={() => {
                checkInputs(['firstname'], true);
              }}
            />
            <ul className="msgs-error firstname">
              <li>need a firstname</li>
              <li>bad firstname</li>
            </ul>
          </div>
          <div className="part-input lastname">
            <h3>
              Nom<em className="not-null">*</em>
            </h3>
            <input
              name="lastname"
              className="input lastname"
              type="text"
              value={infos.lastname || ''}
              onChange={handleInput}
            />
          </div>
          <div className="part-input city">
            <h3>
              Ville<em className="not-null">*</em>
            </h3>
            <input
              name="city"
              className="input city"
              type="text"
              value={infos.city || ''}
              onChange={handleInput}
            />
          </div>
          <div className="part-input gender">
            <h3>
              Sexe<em className="not-null">*</em>
            </h3>
            <select name="gender" onChange={handleInput}>
              <option value="female">femme</option>
              <option value="male">homme</option>
            </select>
          </div>
          <div className="part-input phone">
            <h3>
              Téléphone<em className="not-null">*</em>
            </h3>
            <input
              name="phone"
              className="input phone"
              type="text"
              value={infos.phone || ''}
              onChange={handleInput}
            />
          </div>
          <div className="part-input birthday">
            <h3>
              Date de naissance<em className="not-null">*</em>
            </h3>
            <input
              name="birthday"
              className="input birthday"
              type="date"
              value={infos.birthday || ''}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="box-button">
          <SButton type="submit" onClick={handleSubmit}>
            <p className="btn-text">Créer le profil</p>
          </SButton>
          <Link to="/login">
            Déjà un profil ? <em>Se connecter</em>
          </Link>
        </div>
      </form>
    </SSignup>
  );
}
