import styled from 'styled-components';

const defaultColor = '#2ac8bf';

const SButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 20px;
  font: 500 1.1em 'roboto';
  border: 1px solid;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => props.color || defaultColor};
  border-color: ${(props) => props.color || defaultColor};

  &:hover {
    border-color: ${(props) => props.color || defaultColor};
    background-color: #fff;

    .btn-text {
      color: ${(props) => props.color || defaultColor};
    }

    .btn-icon {
      fill: ${(props) => props.color || defaultColor};
    }
  }

  &:active {
    transform: translate(1px, 1px);
  }

  .btn-text {
    color: #fff;
  }

  .btn-icon {
    width: 26px;
    height: 26px;
    fill: #fff;
    margin-left: 10px;
  }
`;

export default SButton;
