import styled from 'styled-components';

const SContactUs = styled.div`
  font-family: Roboto;
  font-weight: bold;
  width: 600px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 100px;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 700px) {
    width: 90%;
  }

  .content {
    margin: auto;
    padding: 8%;

    h2 {
      font-size: 60px;
      margin-bottom: 20px;
      @media (max-width: 400px) {
        font-size: 50px;
      }
    }
    .contactUs {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 10px;
      }
      #field {
        width: 100%;
        border: none;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      }
      .text {
        height: 100px;
        resize: vertical;
      }
      .button {
        background-color: #ffffff;
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        margin: auto;
        margin-top: 40px;
        border-radius: 20px;
        height: 60px;
        width: 50%;
        border: none;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        &:hover {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
`;

export default SContactUs;
