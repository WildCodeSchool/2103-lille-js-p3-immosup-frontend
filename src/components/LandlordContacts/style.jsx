import styled from 'styled-components';

const SLandlordContacts = styled.div`
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0px 100px 0px 100px;

  h2 {
    font-size: 70px;
    margin-top: 130px;
    margin-bottom: 72px;
    margin-left: 80px;
    font-weight: 700;
    line-height: 29.3px;
  }

  .icons {
    padding: 15px;
    margin: 50px auto 65px auto;
    height: 90vh;
    width: 73vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-evenly;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .icons img {
    color: #a8a8a8;
    border-radius: 50%;
    height: 170px;
    width: 170px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    margin: 10px;
  }

  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .icon p {
    margin-top: 13px;
    font-weight: 600;
    margin-bottom: 13px;
  }
  .first-word {
    font-weight: 700;
  }

  @media screen and (max-width: 1200px) {
    .icons img {
      width: 100px;
      height: 100px;
    }
  }
`;

export default SLandlordContacts;
