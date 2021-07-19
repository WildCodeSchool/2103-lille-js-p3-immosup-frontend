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
    overflow: hidden;

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
        padding-right: 10px;
      }

      &.second {
        width: 100%;
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
  }

  @media screen and (max-width: 850px) {
    padding: 0;

    .title-page {
      font-size: 40px;
      margin: 30px 0 0 20px;
    }

    .part {
      box-shadow: none;
      padding: 10px 20px;
      margin-top: 40px;

      h2 {
        width: 100%;
        color: #2ac8bf;
      }

      &.about {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        section {
          width: auto;
          padding: 10px 20px 0px 20px;
          flex-direction: column;
          align-items: center;

          .picto {
            width: 36px;
            height: 36px;
          }

          .content {
            margin: 10px 0;
            text-align: center;
          }
        }
      }
    }

    .connected-parts {
      flex-direction: column;

      .parts {
        width: 100%;
        padding: 0;
      }
    }
  }
`;

export default SProfil;
