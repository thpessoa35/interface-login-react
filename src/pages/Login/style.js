import styled from "styled-components";

export const Container2 = styled.div`
        padding: 0;
        margin: 0;
        margin-top: -18%;
        margin-left: -26%;
        background-color: #808080;
        width: 60vw;
        height: 65vh;
        position: absolute;
        border-radius: 30px;
        background: transparent;
        border: 3px solid rgb(216,191,216);
        backdrop-filter: blur(20px);
        

        h1{
            font-size: 4em;
            left: 100px;
            top: 10px;
            position: relative;
            color:rgb(238,130,238);
        }
        .pe{
            font-size: 20px;
            left: 150px;
            top: 30px;
            position: relative;
            color: black;
        }
    
     
        @media screen and (max-width: 950px) {
        width: 85%;
    }
     

`

export const Container = styled.div`
        
        position: absolute;
        width: 400px;
        height: 450px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid black;
        margin-left: 58%;
        margin-top: -5%;
        margin-bottom: 100%;
        background: transparent;
        backdrop-filter: blur(30px);

        
        h2{
            
            text-align: center;
            font-size: 3em;
            color: black;
            
        }

        .span {
            position: absolute;
            left:60%;
            top: -13px;
            
        }

        .login{
              width: 100%;
              height: 40px;
              border-radius: 10px;
              border: none;
              margin-top:20px;
              font-size: 1em;
              color: black;
              outline: none;
              cursor: pointer;
              font-weight: 600;
              background-color: rgb(240, 128, 128);
            
              
        }
        .remember-password{
              display: relative;
              height: 25px;
              border-bottom: transparent;
              color: black;

        }
        .remember-password > a{
              margin-left: 90px;
              outline: none;
              text-decoration: none;
              color: black;
              
        }
        .Register{
              display: flex;
              align-items: center;
              justify-content: center;
              padding: -50px;
              margin-top: 2vh;
              color: black;

        }
        .Register > p a{
              font-size: 600;
              color: black;
              text-decoration: none;
              margin-left: 5px;
        }
        Input:focus ~ label,
        Input:not(:placeholder-shown) ~ label{
           top: -5px;
        }
        @media screen and (max-width: 700px) {
        width: 35%;
    }
     

`
export const Form = styled.form``

export const InputBox = styled.div`
        position: relative;
        width: 310px;
        margin: 30px 0;
        border-bottom: black 2px solid;
        
        
        label{
                position: absolute;
                top: 50%;
                left: 5px;
                transform: translateY(-50%);
                font-size: 1em;
                pointer-events: none;
                color: black;
                transition: .5s;
        }
    
       

        
`