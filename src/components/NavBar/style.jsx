import styled from 'styled-components';

const SNavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 60px;
  padding: 0 20px;

  .link {
    text-decoration: none;
    font-size: 20px;

    &:hover {
      transform: translate(1px, 1px);
    }

    &.immosup {
      font-weight: bold;
    }
  }

  .btn-connexion {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:active {
      transform: translate(1px, 1px);
    }
  }
`;

export default SNavBar;
