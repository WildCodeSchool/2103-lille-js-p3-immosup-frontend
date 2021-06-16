import styled from 'styled-components';

const STitle = styled.div`
  .inputTitle {
    width: 50%;
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
  }
  .titleContainer {
    input {
      width: 100%;
    }
  }
  .titleContainer,
  .categoryContainer {
    display: flex;
    align-items: center;
  }
`;

export default STitle;
