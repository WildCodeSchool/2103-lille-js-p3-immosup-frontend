import styled from 'styled-components';

const STitle = styled.div`
  .inputTitle {
    height: 20px;
  }
  .radioContainer {
    display: flex;

    label {
      margin: 10px;
      font: 400 1.2em 'roboto';

      input {
        margin-left: 10px;
      }
    }
  }
  .titleBox {
    display: flex;
    justify-content: space-around;
  }
  .titleContainer {
    display: flex;
    width: 60%;
    input {
      width: 50%;
    }
  }
  .titleContainer,
  .categoryContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export default STitle;
