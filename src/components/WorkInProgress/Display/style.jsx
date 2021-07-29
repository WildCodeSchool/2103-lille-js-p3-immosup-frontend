import styled from 'styled-components';

const SWorkInProgressDisplay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -270px;
  margin-left: -300px;
  @media screen and (max-width: 650px) {
    margin-top: -40vh;
    margin-left: -150px;
  }
`;

export default SWorkInProgressDisplay;
