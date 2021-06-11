import styled from 'styled-components';

const Addannoncestyle = styled.div`
  background-color: #fff;
  h2 {
    font: 700 2em 'roboto';
  }

  .infos {
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 80vw;
    height: 80vh;
    margin: auto;
    padding: 30px;
  }

  .roomsButton {
    display: flex;

    h2 {
      margin: 0 20px;
      font: 2em 'roboto';
    }
  }

  .buttonClassEnergy button {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50%;
    border: none;
    font-size: 1.2em;
  }
  .buttonGes button {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50%;
    border: none;
    font-size: 1.2em;
  }

  .buttonClassEnergy button:nth-child(1):hover {
    background-color: #10833b;
  }
  .buttonClassEnergy button:nth-child(2):hover {
    background-color: #62953e;
  }
  .buttonClassEnergy button:nth-child(3):hover {
    background-color: #96b02a;
  }
  .buttonClassEnergy button:nth-child(4):hover {
    background-color: #fddb31;
  }
  .buttonClassEnergy button:nth-child(5):hover {
    background-color: #f9b92b;
  }
  .buttonClassEnergy button:nth-child(6):hover {
    background-color: #ea7f21;
  }
  .buttonClassEnergy button:nth-child(7):hover {
    background-color: #de0a25;
  }

  .buttonGes button:nth-child(1):hover {
    background-color: #f6eefd;
  }
  .buttonGes button:nth-child(2):hover {
    background-color: #e1c3f7;
  }
  .buttonGes button:nth-child(3):hover {
    background-color: #d4abf3;
  }
  .buttonGes button:nth-child(4):hover {
    background-color: #ca98f1;
  }
  .buttonGes button:nth-child(5):hover {
    background-color: #b976ec;
  }
  .buttonGes button:nth-child(6):hover {
    background-color: #a654e8;
  }
  .buttonGes button:nth-child(7):hover {
    background-color: #892adc;
  }
`;

export default Addannoncestyle;
