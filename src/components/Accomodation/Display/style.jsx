import styled from 'styled-components';

const sizeScreenTablette = '1300px';
const sizeScreenMobile = '800px';
const widthPage = '1200px';
const widthResp = '90vw';
const boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.25)';

const SAccomodation = styled.div`
  width: ${widthPage};
  margin: auto;
  margin-bottom: 100px;

  h2 {
    font-size: 60px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.5em;
  }

  .container {
    box-shadow: ${boxShadow};
    padding: 50px;
    border-radius: 20px;
    @media (max-width: ${sizeScreenTablette}) {
      width: ${widthResp};
    }

    .img-position {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-self: center;

      .picture {
        max-width: 450px;
        max-height: 450px;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      }
    }

    .informations {
      display: flex;
      margin-top: 50px;
      @media (max-width: ${sizeScreenMobile}) {
        flex-direction: column;
      }

      .criteria {
        box-shadow: ${boxShadow};
        padding: 30px;
        border-radius: 10px;
        margin-right: 30px;
        width: 300px;
        @media (max-width: ${sizeScreenMobile}) {
          width: 100%;
        }

        .rent {
          font-size: 25px;
          font-weight: bold;
          color: #2ac8bf;
          margin-top: 20px;
        }
      }

      .description {
        box-shadow: ${boxShadow};
        padding: 30px;
        border-radius: 10px;
        width: 70vw;
        @media (max-width: ${sizeScreenMobile}) {
          width: 100%;
          margin-top: 30px;
        }
      }
    }
  }
`;

export default SAccomodation;
