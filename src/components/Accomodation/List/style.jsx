import styled from 'styled-components';

const SList = styled.div`
  width: 1200px;
  margin: auto;

  @media (max-width: 1300px) {
    width: 90%;
  }

  h2 {
    font-size: 40px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default SList;
