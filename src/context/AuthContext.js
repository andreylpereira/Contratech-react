import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api'
import { useNavigate } from "react-router-dom";
const Context = createContext();


function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');


    const goToHome = () => {
        navigate("/home");
      };

      const goToLogin = () => {
        navigate("/login");
      };


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token.replace(/['"]+/g, "")}`;
            setAuthenticated(true);
            let usuario = localStorage.getItem("login").replace(/['"]+/g, "");
            setUser(usuario);

        }
        setLoading(false);
    }, [])


    async function handleLogin(login, senha) {

        const { data: { token }, data: { id } } = await api.post('/seguranca/login', { login, senha });

        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('id', JSON.stringify(id));
        localStorage.setItem('login', JSON.stringify(login))
        setAuthenticated(true);
        let usuario = localStorage.getItem("login").replace(/['"]+/g, "");
        setUser(usuario); 
        goToHome();
        
    }

    function handleLogOut() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('login');
        api.defaults.headers.Authorization = undefined;
        goToLogin();

    }

    if (loading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogOut ,loading, user }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };