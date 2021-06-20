import styled from 'styled-components';

const SModalProfil = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    margin: 60px auto;
    width: 700px;

    .btn-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      width: 36px;
      height: 36px;
      cursor: pointer;

      .icon-close {
        fill: #505254;
      }

      &:hover {
        .icon-close {
          fill: #e61010;
        }
      }

      &:active {
        transform: translate(1px, 1px);
      }
    }

    .title-modal {
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      padding: 20px 0;
      color: #505254;
      border-bottom: 1px solid #d0d0d0;
    }

    form {
      padding: 20px;

      .form {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #d0d0d0;

        h2 {
          font-weight: 700;
          font-size: 28px;
          line-height: 25px;
          color: #505254;
          margin-bottom: 10px;
        }

        .input,
        .textarea {
          font-size: 18px;
          line-height: 22px;
          color: #5c5e61;
          border: 1px solid #868686;
          outline: none;

          &:focus {
            border: 1px solid #109fe6;
          }
        }

        .input {
          width: 50%;
          height: 40px;
          padding: 0 10px;

          &.age {
            width: 52px;
          }
        }

        .textarea {
          width: 100%;
          height: 160px;
          resize: none;
          padding: 10px 10px;
        }
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0;

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

      &.save {
        background-color: #109fe6;
        border-color: #109fe6;
        margin-right: 10px;

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

      &.cancel {
        background-color: #e61010;
        border-color: #e61010;
        margin-left: 10px;

        &:hover {
          border-color: #e61010;
          background-color: #fff;

          .btn-text {
            color: #e61010;
          }

          .btn-icon {
            fill: #e61010;
          }
        }
      }

      &:active {
        transform: translate(1px, 1px);
      }
    }
  }
`;

export default SModalProfil;
