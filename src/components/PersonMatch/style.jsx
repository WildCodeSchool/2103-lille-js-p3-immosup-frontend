import styled from 'styled-components';

const SPersonMatch = styled.div`
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  height: 170px;
  width: 170px;
  img {
    display: inline-block;
    margin-top: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;

    border-radius: 100%;
  }

  .name {
    margin-top: 8px;
  }
`;

export default SPersonMatch;
