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
    width: ${widthPage};
    margin: auto;
    padding-top: 50px;
  }

  .personal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${widthPage};
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .user {
    display: flex;
    align-items: center;
    font-weight: bold;
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

    .myMatch {
      box-shadow: ${boxShadow};
      border-radius: 20px;
      width: 900px;
      padding: 20px;
      .h3Match {
        font-weight: bold;
        font-size: 40px;
        &:hover {
          text-decoration: underline;
        }
      }
      .galleryMatch {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        .profilMatch {
          background-color: grey;
          width: 150px;
          height: 150px;
          border-radius: 20%;
        }
      }
    }

    .imgHunt {
      box-shadow: ${boxShadow};
      padding: 40px;
      border-radius: 100%;
      width: 150px;
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

    .housing {
      box-shadow: ${boxShadow};
      border-radius: 20px;
      width: 900px;
      padding: 20px;
      .h3Announcements {
        font-weight: bold;
        font-size: 40px;
        &:hover {
          text-decoration: underline;
        }
      }
      .galleryAnnouncements {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        .profilAnnouncements {
          background-color: grey;
          width: 150px;
          height: 150px;
          border-radius: 20%;
        }
      }
    }

    .search {
      box-shadow: ${boxShadow};
      padding: 40px;
      border-radius: 100%;
      width: 150px;
      &:hover {
        box-shadow: ${hoverBoxShadow};
      }
    }
  }
`;

export default STenantDashboard;
