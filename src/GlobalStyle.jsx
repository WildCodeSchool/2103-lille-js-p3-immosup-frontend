import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #000;
  }

  .fakeCard {
    background-color: yellowgreen;
    width:530px;
    height:300px;
  }
  .fakeBadge {
    background-color: yellowgreen;
    width:300px;
    height:300px;
  }
`;

export default GlobalStyle;
