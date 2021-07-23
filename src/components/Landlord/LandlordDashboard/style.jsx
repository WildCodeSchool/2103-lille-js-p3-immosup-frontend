import styled from 'styled-components';

const boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.25)';

const SLandlordDashboard = styled.div`
  padding: 60px;

  h1 {
    font: 600 3em 'roboto';
  }

  .personalInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    img {
      width: 100px;
      margin-right: 40px;
    }
    .userName {
      font-size: 1.5em;
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    div {
      width: 400px;
      height: 70px;
      border: 1px solid #e8e8e8;
      border-radius: 20px;
      box-shadow: ${boxShadow};

      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        font: 500 1.8em 'roboto';

        &:hover {
          color: #2ac8bf;
        }
      }
    }
  }

  .annonce {
    margin-top: 30px;
    box-shadow: ${boxShadow};
    border-radius: 20px;
    min-height: 300px;
    padding: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .linkAnnonce {
      text-decoration: none;
      font: 500 2em 'roboto';
      margin: 30px;
    }

    .buttonAdd {
      box-shadow: ${boxShadow};
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      a {
        margin: 100px;
        text-decoration: none;
        font: 500 10em 'roboto';
        color: #a8a8a8;
      }
    }
  }
`;

export default SLandlordDashboard;
