import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SHomePage from './style';

export default function HomePage() {
  const [currImg, setCurrImg] = useState(Math.floor(Math.random() * 3) + 1);

  const changeImg = () => {
    if (currImg < 3) {
      setCurrImg(currImg + 1);
    } else {
      setCurrImg(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(changeImg, 8000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <SHomePage carousel={currImg}>
      <header>
        <div className="logo-container">
          <img
            loading="lazy"
            src="/img/logo/logoFull-1.png"
            className="logo"
            alt="logo"
          />
        </div>
        <div className={`carousel img-${currImg}`}>
          <Link to="tenant/dashboard" className="link-dashboard tenant">
            Espace étudiants et jeunes dîplomés
          </Link>
          <Link to="landlord/dashboard" className="link-dashboard landlord">
            Espace déposeurs d&apos;annonces
          </Link>
        </div>
      </header>
      <div className="infos">
        <section className="info first">
          <h1 className="title">IMMO’SUP c’est quoi ?</h1>
          <article className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </article>
        </section>
        <section className="info second">
          <h1 className="title">IMMO’SUP c’est quoi ?</h1>
          <article className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </article>
        </section>
      </div>
    </SHomePage>
  );
}
