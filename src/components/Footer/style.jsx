import styled from 'styled-components';

const SFooter = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #109fe6;
  color: #fff;
  right: 0;
  bottom: 0;
  left: 0;
  height: 75px;
  padding: 0 20px;

  .link {
    text-decoration: none;
    color: inherit;
    font-size: 15px;

    &.immosup {
      font-weight: 500;
    }

    &.contact {
      margin-right: 20px;
    }
  }
`;

export default SFooter;
