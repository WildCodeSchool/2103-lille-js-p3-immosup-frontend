import styled from 'styled-components';

const SWorkInProgress = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    margin: auto;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.25);
    background-color: white;
    @media screen and (max-width: 650px) {
      width: 300px;
    }

    img {
      width: 150px;
      margin-bottom: 30px;
    }

    p {
      text-align: center;
    }
  }
`;

export default SWorkInProgress;
