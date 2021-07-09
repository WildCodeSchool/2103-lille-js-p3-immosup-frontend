import styled from 'styled-components';

const SThumbnail = styled.div`
  h2 {
    width: 1200px;
    margin: auto;
    padding-top: 50px;
    font-size: 60px;
    font-weight: bold;
    @media (max-width: 1300px) {
      width: 90%;
    }
  }

  h3 {
    font-size: 20px;
  }

  p {
    margin-top: 10px;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 1200px;
    margin: auto;
    padding: 30px;
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 100px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    @media (max-width: 1300px) {
      width: 90%;
    }

    .thumbnail {
      display: flex;
      align-items: center;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      width: 530px;
      padding: 30px;
      border-radius: 10px;
      margin: 20px;
      &:hover {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      }
      @media (max-width: 1300px) {
        width: 90%;
      }
      @media (max-width: 650px) {
        flex-direction: column;
        align-items: flex-start;
      }

      .picture {
        max-width: 250px;
        max-height: 250px;
        border-radius: 10px;
        @media (max-width: 650px) {
          max-width: 90%;
          max-height: 90%;
        }
        @media (max-width: 650px) {
          margin: auto;
        }
      }

      .information {
        padding-left: 30px;
        @media (max-width: 650px) {
          margin-top: 30px;
          padding-left: 20px;
        }

        .rent {
          font-size: 20px;
          font-weight: bold;
          color: #2ac8bf;
        }
      }
    }
  }
`;

export default SThumbnail;
