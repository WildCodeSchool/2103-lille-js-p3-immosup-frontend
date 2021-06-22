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

          &.hobbies {
            margin-bottom: 20px;
          }
        }

        .textarea {
          width: 100%;
          height: 160px;
          resize: none;
          padding: 10px 10px;
        }

        .hobbies-inputs {
          display: flex;
          flex-flow: row wrap;

          .btn-remove-hobbies {
            width: 30px;
            height: 30px;
            margin: 5px 0 0 10px;
            border: none;
            background-color: transparent;
            cursor: pointer;

            svg {
              fill: #908d8d;
            }

            &:hover svg {
              fill: #dc5353;
            }

            &:active {
              transform: translate(1px, 1px);
            }
          }
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

    .btn.save {
      margin-right: 10px;
    }

    .btn.cancel {
      margin-left: 10px;
    }
  }
`;

export default SModalProfil;
