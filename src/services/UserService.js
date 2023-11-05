import axios from 'axios';

export default class UserService {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:3001'
        })
    }
        async login(dados) {
        try {
            const response = await this.axios.post('/contacts/login', dados, {
                headers : {'Content-Type': 'application/json'}
            })
            if (response.data.message === "Login bem-sucedido") {
                const token = response.data.token
                localStorage.setItem("token", token)
                return true
              }
            } catch (error) {
              console.error("Erro ao fazer login:", error);
            }
            return false
          }
        
          async registerUser(userData) {
            try {
              const responses = await this.axios.post('/contacts', userData, {
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (responses.data.message === "Usuário criado com sucesso") {
                return true; 
              } else {
                return false; 
              }
            } catch (error) {
              console.error("Erro durante o registro do usuário:", error);
              throw error; 
            }
          }


          async checkEmailExists(email) {
            try {
              const responses = await this.axios.post('/contacts/email', {
                email: email,
              });

              if (responses.data.message === "Email existe") {
                return true; 
              } else {
                return false; 
              }
            } catch (error) {
              console.error("Erro ao verificar e-mail:", error);
              throw error; 
            }
          }    

    UserAuth(){
      return localStorage.getItem("token") != undefined ? true : false
        
    }      
    UserExit(){
       localStorage.removeItem("token")
    }
    
}