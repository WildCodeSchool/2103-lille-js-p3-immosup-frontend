import styled from 'styled-components';

const Addannoncestyle = styled.div`
  h1 {
    font: 600 2em 'roboto';
    margin-left: 15vw;
    margin-top: 40px;
  }
  h2 {
    font: 600 1.5em 'roboto';
    margin: 20px;
  }
  .partContainer {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    width: 70vw;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 30px;
  }

  .continue {
    width: 120px;
    height: 50px;
    border-radius: 20px;
    margin-left: 90%;
    font: 500 1.1em 'roboto';
    border: none;
    background-color: #fff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    transition: 0.2s ease-in-out;
  }
  .continue:hover {
    color: #fff;
    background: #109fe6;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  .sendButton {
    width: 60px;
    height: 40px;
    border-radius: 20px;
  }
`;

export default Addannoncestyle;
