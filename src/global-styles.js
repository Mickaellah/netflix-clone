import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Halvetica Nue', Halvetica, Arial, sans-serif;
        -webkit-font-amoothing: antialised;
        -moz-osx-font-smoothing: antialised;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
    }
`;