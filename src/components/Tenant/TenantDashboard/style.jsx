import styled from 'styled-components';

// const global ===================================

const boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.25)';
const hoverBoxShadow = '2px 2px 5px rgba(0, 0, 0, 0.25);';
const widthPage = '1100px';

// const button ===================================

const colorButton = '#ffffff';
const borderButton = '1px solid #e8e8e8';
const paddingButton = '20px';

// style of personal ===================================

const SProfil = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-image: url(${(props) => props.bckImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const STenantDashboard = styled.div`
  margin-bottom: 50px;
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
    width: ${widthPage};
    margin: auto;
    padding-top: 50px;
    @media (max-width: 1200px) {
      width: 90%;
    }
  }

  .personal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${widthPage};
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
    }
  }

  .user {
    display: flex;
    align-items: center;
    font-weight: bold;
    @media (max-width: 1200px) {
      width: 100%;
      margin-bottom: 30px;
    }
    .h3User {
      font-size: 25px;
      margin-left: 20px;
      width: 250px;
    }
    .imgAvatar {
      background-color: grey;
      width: 120px;
      height: 120px;
      border-radius: 100%;
    }
  }

  .buttonProfil {
    padding: ${paddingButton};
    background-color: ${colorButton};
    border: ${borderButton};
    box-shadow: ${boxShadow};
    border-radius: 20px;
    @media (max-width: 1200px) {
      width: 100%;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    &:hover {
      box-shadow: ${hoverBoxShadow};
    }
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
    margin-right: 30px;
    @media (max-width: 1200px) {
      width: 100%;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    &:hover {
      box-shadow: ${hoverBoxShadow};
    }
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
    margin-right: 30px;
    width: 90px;
    height: 90px;
    cursor: pointer;
    @media (max-width: 1200px) {
      padding: 15px;
      border-radius: 20px;
      width: 100%;
      height: 70px;
      margin-top: 5px;
      margin-right: 0px;
      .imgDisconnected {
        height: 100%;
      }
    }
    &:hover {
      box-shadow: ${hoverBoxShadow};
    }
  }

  // style of flatsharing ===================================

  .flatsharing {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${widthPage};
    margin: auto;
    padding-bottom: 30px;
    @media (max-width: 1200px) {
      flex-direction: column;
      width: 100%;
      padding-top: 20px;
    }

    .myMatch {
      box-shadow: ${boxShadow};
      border-radius: 20px;
      width: 900px;
      padding: 20px;
      @media (max-width: 1200px) {
        width: 90%;
      }

        
      }
    }

    .imgHunt {
      box-shadow: ${boxShadow};
      padding: 40px;
      border-radius: 100%;
      width: 150px;
      height: 150px;
      @media (max-width: 1200px) {
        margin-top: 20px;
        width: 90vw;
        border-radius: 20px;
      }
      &:hover {
        box-shadow: ${hoverBoxShadow};
      }
      
    }
  }
  

  // style of announcements ===================================
  .announcements {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${widthPage};
  margin: auto;
  padding-bottom: 50px;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    padding-top: 30px;
  }
  
  .housing {
    box-shadow: ${boxShadow};
    border-radius: 20px;
    width: 900px;
    padding: 20px;
    @media (max-width: 1200px) {
      width: 90%;
    }
   

  }
  .search {
    box-shadow: ${boxShadow};
    padding: 40px;
    border-radius: 100%;
    width: 150px;
    height: 150px;
    @media (max-width: 1200px) {
      margin-top: 20px;
      width: 90vw;
      border-radius: 20px;
    }
    &:hover {
      box-shadow: ${hoverBoxShadow};
    }
  }
`;

export default STenantDashboard;

export { SProfil };
