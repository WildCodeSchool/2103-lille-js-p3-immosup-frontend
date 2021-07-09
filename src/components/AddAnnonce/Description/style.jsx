import styled from 'styled-components';

const SDescription = styled.div`
  .addressCity {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .adress,
    .city,
    .rent {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 30%;

      input {
        width: 40%;
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
