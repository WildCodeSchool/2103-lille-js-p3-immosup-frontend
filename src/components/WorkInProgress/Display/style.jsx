import styled from 'styled-components';

const SWorkInProgressDisplay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -300px;
  @media screen and (max-width: 650px) {
    margin-left: -150px;
  }
`;

export default SWorkInProgressDisplay;
