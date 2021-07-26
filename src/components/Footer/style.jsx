import styled from 'styled-components';

const SFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #109fe6;
  width: 100vw;
  height: 75px;
  padding: 0 20px;

  .link {
    text-decoration: none;
    color: #fff;
    font-size: 15px;

    &:hover {
      transform: translate(1px, 1px);
    }

    &.immosup {
      font-weight: 500;
    }

    &.contact {
      margin-right: 20px;
    }
  }
`;

export default SFooter;
