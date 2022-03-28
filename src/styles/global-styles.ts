import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    background-color: #EF5D50;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    transition: color 100ms;
    vertical-align: baseline;

    &:hover {
        background-color: rgba(239, 93, 80, 0.8);
      }
  }

`;