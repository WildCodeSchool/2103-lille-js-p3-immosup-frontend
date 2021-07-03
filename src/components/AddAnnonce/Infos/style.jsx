import styled from 'styled-components';

const SInfo = styled.div`
  .box1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .box2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .box3 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .boxPlaceType,
  .boxFurnished {
    display: flex;
    align-items: center;
  }
  .roomsButton {
    display: flex;
    align-items: center;

    button {
      height: 30px;
      width: 30px;
      border: none;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      font: 800 1.2em 'roboto';
      color: #999999;
    }
    button:hover {
      background-color: #bdbdbd;
    }
    button:active {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    }
  }
  .radioContainer {
    display: flex;

    label {
      margin: 10px;
      font: 400 1.2em 'roboto';
    }
  }
  .surface,
  .rooms,
  .boxAnimals {
    display: flex;
    align-items: center;
  }

  .selectEnergy,
  .selectGes {
    display: flex;
    align-items: center;
    select {
      height: 20px;
    }
  }
`;

export default SInfo;
