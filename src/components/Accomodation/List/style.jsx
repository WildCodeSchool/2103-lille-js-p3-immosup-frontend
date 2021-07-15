import styled from 'styled-components';

const SList = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 100px;
  @media (max-width: 1300px) {
    width: 90%;
  }

  h2 {
    font-size: 60px;
    margin-bottom: 50px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default SList;
