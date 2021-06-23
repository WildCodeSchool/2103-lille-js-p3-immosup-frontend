import React, { useState, useMemo } from 'react';
import TinderCard from 'react-tinder-card';
import './style.css';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://img.ohmymag.com/article/480/international/adriana-lima-avec-maquillage_9cf3f13479e10455c940ca0050da67233e5470f9.jpg',
  },
  {
    name: 'Erlich Bachman',
    url: 'https://www.leparisien.fr/resizer/X5Jg8caSJEchAVg0v5Av_IyRAag=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/VW5VYSUBSDHDGFDMJQ6GPGTH5M.jpg',
  },
  {
    name: 'Monica Hall',
    url: 'https://i.pinimg.com/originals/5f/b1/96/5fb196689725e076d90c8b9de22a8f84.jpg',
  },
  {
    name: 'Jared Dunn',
    url: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_560x800/public/2018-04/abaca_288073_026.jpg',
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://www.vanityfair.fr/uploads/images/thumbs/201622/55/slidr_jpg_2862_north_640x480_transparent.jpg',
  },
];

const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

function Swipe() {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log(nameToDelete, 'name');
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name, ' left the screen!');
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />

      <div className="cardContainer">
        {characters.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: `url(${character.url})` }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button type="button" onClick={() => swipe('left')}>
          Swipe left!
        </button>
        <button type="button" onClick={() => swipe('right')}>
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get started!
        </h2>
      )}
    </div>
  );
}

export default Swipe;
