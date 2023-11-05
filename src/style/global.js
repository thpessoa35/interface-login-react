import { createGlobalStyle } from "styled-components";
import IMG from '../img/img.jpg'
import IMG2 from '../img/img13.svg'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
       
        
       
        @media screen and (max-width: 950px) {
        width: 100%;
        
    }
    body{
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        background: url(${IMG}) no-repeat;
        background-size: cover;
        
        @media screen and (max-width: 950px) {
        width: 30%;

      
    }
        

    }
`

export default GlobalStyle;