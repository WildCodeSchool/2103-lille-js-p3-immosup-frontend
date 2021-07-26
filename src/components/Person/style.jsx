import styled from 'styled-components';

const SPerson = styled.div`
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h2 {
    font-size: 20px;
    text-align: center;
  }

  .icons {
    margin: 50px auto 65px auto;
    height: 40vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-evenly;
    border: 1px solid #e8e8e8;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);

    img {
      color: #a8a8a8;
      border-radius: 50%;
      height: 30vh;
      width: 15vw;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      margin: 10px;
    }
  }

  .icon {
    display: flex;
  }

  p {
    font: 20px;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    .icons img {
      width: 100px;
      height: 100px;
    }
  }
`;

export default SPerson;
