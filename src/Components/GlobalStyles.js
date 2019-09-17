import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;

}
body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:15px;
    color:white;
    height:100%;
    line-height:1.5;
    overflow-x:hidden;
 @media screen and (min-width:1300px) {

     
 }

}
`;

export default globalStyles;
