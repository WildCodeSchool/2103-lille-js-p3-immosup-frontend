import styled from 'styled-components';

const SInfo = styled.div`
  .box1 {
    display: flex;
  }
  .box2 {
    display: flex;
  }
  .boxPlaceType,
  .boxFurnished {
    display: flex;
    align-items: center;
  }
  .roomsButton {
    display: flex;
    align-items: center;

    button {
      height: 20px;
      width: 30px;
    }
  }
  .radioContainer {
    display: flex;

    label {
      margin: 10px;
      font: 400 1.2em 'roboto';
    }
  }
`;

export default SInfo;
