import styled from 'styled-components';

const SProfil = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 0 10vw;

  .title-page {
    font-weight: bold;
    font-size: 60px;
    margin: 30px 0;
  }

  .part {
    width: 100%;
    margin-bottom: 20px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #fff;

    &.profil {
      text-align: center;

      .avatar {
        width: 168px;
        height: 168px;
        border-radius: 50%;
        object-fit: cover;
      }

      .name {
        font-weight: bold;
        font-size: 32px;
        color: #505254;
        margin-top: 20px;
      }
    }

    h2 {
      font-weight: 700;
      font-size: 28px;
      line-height: 25px;
      color: #505254;
      margin-bottom: 30px;
    }

    h3 {
      font-weight: 700;
      font-size: 18px;
      color: #505254;
      line-height: 22px;
      margin-bottom: 5px;
    }

    p {
      font-size: 18px;
      line-height: 22px;
      color: #5c5e61;
    }

    section {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .picto {
        width: 20px;
        height: 20px;
      }

      .content {
        margin: 0 0 20px 10px;
      }
    }
  }

  .connected-parts {
    display: flex;
    width: 100%;

    .parts {
      &.first {
        width: 30%;
        padding-right: 10px;
      }

      &.second {
        width: 70%;
        padding-left: 10px;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0 40px 0;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      border-radius: 4px;
      font-size: 20px;
      font-weight: 500;
      border: 1px solid;
      padding: 0 10px;
      cursor: pointer;

      .btn-text {
        color: #fff;
      }

      .btn-icon {
        width: 26px;
        height: 26px;
        fill: #fff;
        margin-left: 10px;
      }

      &.modif,
      &.login {
        background-color: #109fe6;
        border-color: #109fe6;

        &:hover {
          border-color: #109fe6;
          background-color: #fff;

          .btn-text {
            color: #109fe6;
          }

          .btn-icon {
            fill: #109fe6;
          }
        }
      }

      &:active {
        transform: translate(1px, 1px);
      }
    }
  }
`;

export default SProfil;
