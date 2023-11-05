import React, {  useState, } from "react";
import {Container, Form, InputBox, Container2} from './style'
import { Input } from "../../Components/Input/index";
import { Link, useNavigate } from "react-router-dom";
import isEmailValid from "../../utils/isEmailValid";
import UserService from "../../services/UserService";





function Login () {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [Errors, setErrors] = useState({});
    const [authenticated, setAuthenticated] = useState(false); 
    const navigate = useNavigate()
    const userService = new UserService()

     const handleClick = async (e) => {
     e.preventDefault();
    try {
      
      const validationErrors = isEmailValid(email, password);
     if (validationErrors.validLogin) {
      setErrors(validationErrors);
      return;
    }
    const userData = {
      email: email,
      password: password
    };
      setErrors({})
      const responses = await userService.login(userData)
      console.log(responses)
       if (responses === true){
          setAuthenticated(true)
          navigate("/home")
    } else {
      setErrors({ validLogin:"Email ou senha incorreta"})
    } 
  } catch (err) {
    console.error(err);
    setErrors({ validLogin: "Erro ao fazer login" });

  }
};


    return( 
       <>
        <Container2>
            <h1>Seja Bem vindo</h1>
            <p className="pe">Este é meu primeiro projeto com React.
            <br/>Neste Projeto, irei estar fazendo <br/>toda autenticação com React</p>
            <Container>
                <Form>
                       <h2>Login</h2> 
                       <InputBox>
                            <Input
                            type="text"  
                            value={email} 
                            onChange={(e) => [setEmail(e.target.value)]}   
                            />
                            {Errors.validLogin && <span class="span" style={{color: "purple"}}>{Errors.validLogin}</span>}
                            <label>Email</label>    
                       </InputBox>
                            
                       <InputBox>
                            <Input
                              type="password"
                              value={password}
                              onChange={(e) => [setPassword(e.target.value)]}
                            />
                            <label>Password</label>    
                       </InputBox>
                        <div className="remember-password">
                            <label> <input type="checkbox"/> Remenber me </label>
                            <a href="#"> Forgot Password?</a>
                        </div>
                        <button class="login" onClick={handleClick}>login</button>
                        <div className="Register">
                            <p>Don't have account?<Link to="/Register">Register</Link></p>
                        </div>
                </Form>
            </Container>
        </Container2>
        
    </> 
    )

}

export default Login;