import styled from 'styled-components';

const SLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font: 600 2em 'roboto';
    margin: 60px;
  }

  .container {
    width: 800px;
    height: 350px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 120px 0;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      p {
        font: 500 1.3em 'roboto';
      }

      input {
        font-size: 18px;
        margin: 20px;
        height: 40px;
        width: 60%;
      }
      .boxButton {
        a {
          text-decoration: none;

          &:hover {
            color: #2ac8bf;
          }
        }
        button {
          font: 500 1.1em 'roboto';
          color: #fff;
          width: 100px;
          height: 50px;
          border-radius: 20px;
          border: none;
          background-color: #2ac8bf;
          margin-left: 30px;

          &:hover {
            cursor: pointer;
            background-color: #4ce7e0;
          }
        }
      }
    }
  }
`;

export default SLogin;
