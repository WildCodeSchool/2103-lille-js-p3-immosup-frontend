import styled from 'styled-components';

const SThumbnail = styled.div`
  a {
    text-decoration: none;
  }

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

  .thumbnail {
    display: flex;
    align-items: center;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    width: 360px;
    height: 220px;
    padding: 30px;
    border-radius: 10px;
    margin: 20px;
    &:hover {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    }
    @media (max-width: 650px) {
      width: 360px;
      height: 500px;
      flex-direction: column;
      align-items: flex-start;
    }

    .picture {
      width: 50%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      @media (max-width: 650px) {
        max-width: 90%;
        max-height: 90%;
      }
      @media (max-width: 650px) {
        margin: auto;
        width: 100%;
        height: 50%;
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
`;

export default SThumbnail;
