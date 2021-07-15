import styled from 'styled-components';

const SSignup = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;

  h1 {
    font: 600 2em 'roboto';
    text-align: center;
    margin-bottom: 60px;
  }

  .part {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    padding: 20px;

    .part-title {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;

      h2 {
        font: 500 1.6em 'roboto';
        margin-left: 10px;
        color: #2ac8bf;
      }

      svg {
        width: 36px;
        height: 36px;
        fill: #2ac8bf;
      }
    }

    .part-input {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto 20px auto;

      h3 {
        font: 500 1.3em 'roboto';

        .not-null {
          color: #d44444;
        }
      }

      input,
      select {
        font-size: 18px;
        margin-bottom: 5px;
        height: 40px;
        width: 100%;
        padding: 0 10px;
        border: 1px solid #737373;
        border-radius: 4px;
      }

      .msgs-error {
        align-self: flex-start;
        text-align: left;

        li {
          color: #d44444;
        }
      }
    }
  }

  .box-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    a {
      margin: 20px 0;
      text-decoration: none;

      &:hover,
      &:hover em {
        color: #2ac8bf;
      }

      em {
        border-bottom: 1px solid;
      }
    }
  }
`;

export default SSignup;
