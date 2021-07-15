import styled from 'styled-components';

const SMessages = styled.div`
  margin: 50px;
  line-height: 1.3;

  .contain {
    margin-left: 8%;
    margin-right: 8%;
  }
  textarea {
    resize: none;
    border: 1px solid #e8e8e8;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;
    margin-left: 68%;
    width: 336px;
    height: 116px;
    font-size: 15px;
  }
  textarea:hover {
    outline: none;
  }
  .button {
    margin-left: 92%;
    height: auto;
  }
  .message {
    background: #f1f1f1;
    margin: 15px;
    border: 1px solid #e8e8e8;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 70%;

    &.me {
      padding: 15px;
      background-color: #2ac8bf;
      border: transparent;
      color: white;
      margin-left: 30%;
    }

    &.other {
      padding: 15px;
      background: #f1f1f1;
      color: black;
    }
  }
`;
export default SMessages;
