import React, { useEffect, useState, } from "react";
import {Container, Form, InputBox, Container2} from './style'
import { Input } from "../../Components/Input/index";
import { Link, useNavigate } from "react-router-dom";
import isEmailValid from "../../utils/isEmailValid";
import Button from "../../Components/button";
import bcrypt from 'bcryptjs-react'
import UserService from "../../services/UserService";


function Register () {
    const [Errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const validationErrors = isEmailValid(name, email, password, password2);
    const [loading, setloading] = useState(false)
    const navigate = useNavigate();
    const userService = new UserService()
    
    async function onclick  (e) {
      e.preventDefault()
      setErrors(validationErrors)
      try{
        setloading(true)
      if(validationErrors.name || validationErrors.email || validationErrors.password || validationErrors.password2){
        
        return
        
      }
      const EmailExist = await userService.checkEmailExists(email)
      if(EmailExist ){
        setErrors({ ...validationErrors, email: "Email já existe" });
        return
      } 
        else{ 
          const salt = bcrypt.genSaltSync(10);
          const hashpassword = bcrypt.hashSync(password, salt);

          const userData = {
            name: name,
            email: email,
            password: hashpassword
          };
       
          const Register = await userService.registerUser(userData);
          alert('Registrado')
          navigate('/Login')
          setloading(false);

          }

        }
       catch(err) {
         console.log("erro no cadastro", err)
     
      } 
    }   
    return( 
            <Container2>
            <h1>Seja Bem vindo</h1>
            <p className="pe">
              Este é meu primeiro projeto com React.
              <br />Neste Projeto, irei estar fazendo <br />toda autenticação com React
            </p>
            <Container>
              <Form>

              <h2>Login</h2>
                <InputBox>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {Errors.name && <span class="span" style={{color: "purple"}}>{Errors.name}</span>}
                       <label>Name</label>
                </InputBox>

                <InputBox>
                  <Input
                    type="text"
                    
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {Errors.email && <span class="span" style={{color: "purple"}}>{Errors.email}</span>}

                  <label>Email</label>    
                </InputBox>
                <InputBox>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {Errors.password && <span class="span" style={{color: "purple"}}>{Errors.password}</span>}
                  <label>Password</label>
                </InputBox>
                <InputBox>
                  <Input
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  {Errors.password2 && <span class="span" style={{color: "purple"}}>{Errors.password2}</span>}
                  <label>Confirm Password</label>
                </InputBox>
                <div className="remember-password">
                  <label>
                    <input type="checkbox" /> Remenber me
                  </label>
                  <a href="#"> Forgot Password?</a>
                </div>
                <Button type="button" onClick={onclick}>Register</Button>
                <div className="Register">
                  <p>
                    Don't have an account?
                    <Link to="/Login">Login</Link>
                  </p>
                </div>
              </Form>
            </Container>
          </Container2> 
        )
  
}

export default Register;