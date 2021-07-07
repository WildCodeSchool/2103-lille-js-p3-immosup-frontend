import styled from 'styled-components';

const SAccomodation = styled.div`
  h2 {
    width: 1200px;
    margin: auto;
    padding-top: 50px;
    font-size: 60px;
    font-weight: bold;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  p {
    margin-top: 10px;
    line-height: 1.5em;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    margin: auto;
    padding: 50px;
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 100px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

    .picture {
      max-height: 400px;
      max-width: 400px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 20px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .informations {
      display: flex;
      margin-top: 40px;

      .criteria {
        min-width: 250px;
        margin-right: 30px;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

        .rent {
          font-size: 20px;
          font-weight: bold;
          color: #2ac8bf;
        }
      }

      .description {
        padding: 30px;
        border-radius: 20px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      }
    }

    .buttons {
      display: flex;

      .button {
        width: 150px;
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 20px;
        padding: 20px;
        border-radius: 10px;
        background-color: #2ac8bf;
        color: white;
        text-align: center;
        font-weight: bold;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        &:hover {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
`;

export default SAccomodation;