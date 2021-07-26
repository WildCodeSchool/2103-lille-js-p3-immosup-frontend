import styled from 'styled-components';

const SHomePage = styled.div`
  margin-bottom: 50px;
  .logo-container {
    text-align: center;

    .logo {
      width: 280px;
      height: 140px;
    }
  }

  .carousel {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 600px;

    &.img-1 {
      background-image: url('/img/carousel/carousel-1.jpg');
    }

    &.img-2 {
      background-image: url('/img/carousel/carousel-2.jpg');
    }

    &.img-3 {
      background-image: url('/img/carousel/carousel-3.jpg');
    }

    .link-dashboard {
      display: inline-block;
      background-color: #fff;
      text-decoration: none;
      color: inherit;
      width: 400px;
      height: 150px;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      padding: 24px;
      margin-bottom: 60px;
      transition: 0.2s ease-in-out;

      &:hover {
        color: #353535;
      }

      &.tenant {
        text-align: left;
      }

      &.landlord {
        text-align: right;
      }
    }
  }

  .infos {
    display: flex;

    .info {
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
        font-size: 26px;
        text-align: center;
        margin: 20px;
      }

      .body {
        text-align: justify;
        font-size: 17px;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .tenant:hover {
      padding-left: 44px;
      width: 420px;
    }

    .landlord:hover {
      padding-right: 44px;
      width: 420px;
    }
  }

  @media screen and (max-width: 1000px) and (min-width: 800px) {
    .carousel {
      .link-dashboard {
        width: 300px;
        height: 130px;
        font-size: 28px;
        line-height: 40px;

        &:hover {
          color: #353535;
        }

        &.tenant {
          &:hover {
            padding-left: 44px;
            width: 320px;
          }
        }

        &.landlord {
          &:hover {
            padding-right: 44px;
            width: 320px;
          }
        }
      }
    }

    .infos {
      .info {
        .title {
          font-size: 30px;
        }

        .body {
          font-size: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .carousel {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .link-dashboard {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90vw;
        height: 130px;
        font-size: 28px;
        line-height: 40px;
        margin: 20px 5vw 20px 5vw;

        &.tenant {
          text-align: center;
        }

        &.landlord {
          text-align: center;
        }
      }
    }

    .infos {
      display: block;

      .info {
        width: 100vw;

        &.first {
          padding: 40px 5vw 20px 5vw;
        }

        &.second {
          padding: 20px 5vw 40px 5vw;
        }

        .title {
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          text-align: center;
          margin: 20px;
        }

        .body {
          text-align: justify;
          font-size: 15px;
        }
      }
    }
  }
`;

export default SHomePage;
