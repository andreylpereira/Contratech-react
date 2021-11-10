import React, { createContext, useState } from 'react';
import api from '../services/api'
const Context = createContext();


// interface User {
//     login: string,
//     id: number
// }

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(login, senha) {
   
        const {data: { token }, data: {id} } = await api.post('/seguranca/login', {login, senha});

        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('id', JSON.stringify(id));
        localStorage.setItem('login', JSON.stringify(login))
        setAuthenticated(true);
    }


    return (
        <Context.Provider value={{ authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };