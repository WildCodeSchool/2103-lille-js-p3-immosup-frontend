import styled from 'styled-components';

const SHomePage = styled.div`
  .logo-container {
    text-align: center;
    .logo {
      width: 360px;
      height: 180px;
    }
  }

  .carousel {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-image: url('/img/header-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 700px;

    .link-dashboard {
      display: inline-block;
      background-color: #fff;
      text-decoration: none;
      color: #000;
      width: 400px;
      height: 150px;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      padding: 24px;
      margin-bottom: 60px;

      &.tenant {
        text-align: left;
      }

      &.landlord {
        text-align: right;
      }
    }
  }

  .descriptions {
    .description {
      width: 50vw;

      &.first {
        padding: 50px 5vw 50px 10vw;
      }

      &.second {
        padding: 50px 10vw 50px 5vw;
      }

      .title {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 47px;
        text-align: center;
        margin: 20px;
      }

      .body {
        text-align: justify;
        font-size: 15px;
        line-height: 18px;
      }
    }
  }
`;

export default SHomePage;
