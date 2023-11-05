export default function isEmailValid(name, email, password, password2, validLogin) {
    const errors = {}

    const errorEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    
     if(name === ""){
        errors.name = "Nome Obrigatorio" 
    } 
    if(email === "") {
        errors.email = "email Obrigatorio"   
    }
    if(!errorEmail.test(email)){
        errors.email ="email incorreto"
    }
    if(password  === "") {
        errors.password = "Senha Obrigatoria"
        
    }
    if(password !== password2){
        errors.password2 = "Senhas diferentes"
    } 

    return errors;
}