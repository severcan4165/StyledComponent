import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    border-box: box-sizing;
}
body{
    background: ${({theme})=> theme.colors.body};
    color:"#00252e";
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
}
p{
    margin: 1rem 0;
    line-height: 1.5;
    opacity: 0.8;
}
`;
