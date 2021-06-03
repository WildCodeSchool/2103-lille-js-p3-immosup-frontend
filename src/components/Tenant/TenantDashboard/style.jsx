import styled from 'styled-components';

// const global ===================================

const boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.25)';

// const button ===================================

const colorButton = '#ffffff';
const borderButton = '1px solid #e8e8e8';
const paddingButton = '20px';

// style of page ===================================

const STenantDashboard = styled.div`
  background-color: #ffffff;
  font-family: 'Roboto', serif;
  a {
    text-decoration: none;
    color: #000000;
    a:visited {
      color: #000000;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 60px;
  }

  .personal {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .user {
    display: flex;
    align-items: center;
    font-weight: bold;
    .h3User {
      font-size: 25px;
    }
    .imgAvatar {
      width: 120px;
    }
  }

  .buttonProfil {
    padding: ${paddingButton};
    background-color: ${colorButton};
    border: ${borderButton};
    box-shadow: ${boxShadow};
    border-radius: 20px;
    .h3Profil {
      font-weight: bold;
      font-size: 30px;
    }
  }

  .buttonCriteria {
    padding: ${paddingButton};
    background-color: ${colorButton};
    border: ${borderButton};
    box-shadow: ${boxShadow};
    border-radius: 20px;
    .h3Criteria {
      font-weight: bold;
      font-size: 30px;
    }
  }

  .buttonDisconnected {
    padding: ${paddingButton};
    background-color: ${colorButton};
    border: ${borderButton};
    box-shadow: ${boxShadow};
    border-radius: 100%;
  }
`;

export default STenantDashboard;
