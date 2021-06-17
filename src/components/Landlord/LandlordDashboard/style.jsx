import styled from 'styled-components';

const SLandlordDashboard = styled.div`
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0px 100px 0px 100px;
  h2 {
    font-size: 70px;
    margin-top: 40px;
    margin-bottom: 65px;
    margin-left: 80px;
    font-weight: 700;
    line-height: 29.3px;
  }
  .personal {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .user h3 {
    letter-spacing: normal;
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }
  .user img {
    width: 150px;
  }

  .profil {
    font-weight: 700;
    line-height: 29.3px;
    font-size: 25px;
    color: black;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 17vh;
  }
  .disconnected {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 95px;
    width: 100px;
    height: 100px;
    border: 1px solid #e8e8e8;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .disconnected img {
    width: 60px;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .announcement {
    margin-bottom: 31px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    height: 57vh;
    width: 60%;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .announcement h3 {
    margin: 30px 20px 30px;
    font-weight: 700;
    line-height: 29.3px;
    font-size: 30px;
    color: black;
  }

  .bloc {
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .housing {
    height: 300px;
    display: flex;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    width: 40%;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .housing img {
    width: 48%;
  }
  .housing p {
    font-size: 12px;
    line-height: 17px;
    font-weight: 600;
  }
  .housingDescription {
    padding: 7px;
  }
  h5 {
    letter-spacing: normal;
    font-size: 25px;
    font-weight: 700;
    margin-left: 20px;
  }
  .bloc2 {
    height: 300px;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .housingPlus {
    font-weight: 700;
    font-size: 120px;
    color: #a8a8a8;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e8e8e8;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .housingPlus p {
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .contact {
    font-weight: 700;
    line-height: 29.3px;
    font-size: 30px;
    color: black;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 23vh;
  }
  .buyCredits {
    font-weight: 700;
    line-height: 29.3px;
    font-size: 30px;
    color: #109fe6;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 23vh;
    margin-top: 20px;
  }
  .profil:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px grey;
  }
  .contact:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px grey;
  }
  .buyCredits:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px grey;
  }
`;

export default SLandlordDashboard;
