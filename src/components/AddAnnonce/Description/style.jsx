import styled from 'styled-components';

const SDescription = styled.div`
  .addressCity {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .adress,
    .city {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 50%;

      input {
        width: 50%;
        height: 20px;
      }
    }
  }
  textarea {
    height: 200px;
    resize: none;
  }
`;

export default SDescription;
