import styled from 'styled-components';

const SWorkInProgress = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    margin: auto;
    padding: 40px;
    padding-bottom: 0px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    background-color: white;
    @media screen and (max-width: 650px) {
      width: 300px;
    }

    img {
      width: 150px;
      margin-bottom: 30px;
      @media screen and (max-width: 650px) {
        width: 100px;
      }
    }

    h2 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: normal;
      @media screen and (max-width: 650px) {
        font-size: 0.9em;
      }
    }

    p {
      text-align: justify;
      text-justify: inter-word;
      hyphens: auto;
      line-height: 1.2em;
      margin-top: 15px;
      width: 100%;
      @media screen and (max-width: 650px) {
        font-size: 0.9em;
      }
    }

    a {
      text-decoration: none;
      color: #ff705c;
      &:hover {
        text-decoration: underline;
      }
      @media screen and (max-width: 650px) {
        font-size: 0.9em;
      }
    }

    .close {
      width: 40px;
      height: 40px;
      padding: 5px;
      border-radius: 100%;
      background-color: #ff705c;
      margin-top: 25px;
    }
  }
`;

export default SWorkInProgress;
