import { createGlobalStyle } from "styled-components";
import SUITVariable from "../assets/fonts/SUIT-Variable.ttf";

const globalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUIT-Variable';
    font-style: normal;
    src: url(${SUITVariable}) format('truetype');
  }
`;

export default globalStyle;
