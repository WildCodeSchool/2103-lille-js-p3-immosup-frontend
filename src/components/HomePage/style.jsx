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
    background-image: url('/img/header-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 700px;

    .link-dashboard {
      background-color: #fff;
      text-decoration: none;
      color: #000;
    }
  }
`;

export default SHomePage;
