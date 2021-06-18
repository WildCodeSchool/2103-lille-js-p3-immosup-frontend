import styled from 'styled-components';

const SProfil = styled.div`
  padding: 30px 10vw;

  .profil-title {
    font-weight: bold;
    font-size: 60px;
  }

  h2 {
    font-weight: bold;
    font-size: 25px;
    margin: 10px 0;
  }

  .row {
    display: inline-block;
  }

  .profil-content {
    position: relative;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin: 30px 0;

    .textbox {
      border: 1px solid #109fe6;
      background-color: #e5eef3;
      font-size: 16px;
      padding: 0 10px;
      height: 40px;
      margin-left: 5px;

      &:focus {
        outline: none;
        background-color: #f3f2e5;
        border-color: #d8cb22;
      }

      &:hover {
        background-color: #f3f2e5;
        border-color: #d8cb22;
      }

      &.aboutme {
        width: 100%;
        height: 100%;
        resize: none;
        padding: 10px;
      }
    }

    .edit {
      position: absolute;
      width: 80px;
      height: 80px;
      right: -40px;
      top: -40px;
      background-color: #109fe6;
      border: none;
      border-radius: 50%;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      &.open {
        background-color: #109fe6;

        &:hover {
          background-color: #2b99d0;
        }
      }

      &.close {
        background-color: #d43737;

        &:hover {
          background-color: #bd2a2a;
        }
      }

      svg {
        width: 40px;
        height: 40px;
        fill: #fff;
      }
    }

    section {
      display: flex;
      width: 100%;

      &#top {
        margin: 40px 0;
        align-items: center;
      }

      &#middle {
        justify-content: space-around;
        margin-bottom: 40px;
      }

      &#bottom {
        justify-content: space-around;
        margin-bottom: 40px;
      }

      .avatar {
        text-align: right;
        padding-right: 15px;
        width: 50%;

        .avatar-content {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        }
      }

      .infos {
        text-align: left;
        padding-left: 15px;
        width: 50%;

        p {
          font-size: 25px;
          text-transform: capitalize;
        }
      }

      .description {
        width: 35%;

        p {
          font-size: 15px;
        }
      }

      .age-city {
        p {
          font-size: 22px;
        }
      }

      .hobbies {
        width: 50%;
        padding-left: 60px;
      }

      .account {
        width: 50%;
      }
    }

    .buttons {
      width: 100%;
      text-align: right;
      margin-bottom: 20px;

      .edit-button {
        width: auto;
        height: 50px;
        font-size: 20px;
        font-weight: 500;
        border: 1px solid;
        padding: 0 30px;
        cursor: pointer;

        &.save {
          margin-right: 20px;
          background-color: #109fe6;
          color: #fff;
          border-color: #109fe6;

          &:hover {
            color: #04d004;
            border-color: #04d004;
            background-color: #e0f5e2;
          }
        }

        &.cancel {
          margin-right: 40px;
          background-color: #ecf2f5;
          color: #109fe6;

          &:hover {
            color: red;
            background-color: #f5e0e0;
          }
        }
      }
    }
  }
`;

export default SProfil;
