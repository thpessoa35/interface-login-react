import { Link, useNavigate } from "react-router-dom";
import React from "react";
import UserService from "../../services/UserService";

function Home() {
    const navigate = useNavigate();
    const userService = new UserService()

    const onClick = (e) => {
        e.preventDefault();
        userService.UserExit()
        navigate('/Login');
    }

    return (
        <>
            <h1>Bem-vindo</h1>
            <button onClick={onClick}>Sair</button>
        </>
    );
}

export default Home;