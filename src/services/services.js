import api from '../services/api';
class Services {

    cadastrar(data) {
        api.post('/cadastro', data)
    }

    buscarObras(token, id) {
        
        return api.get(`/usuarios/${id}/obras`, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
        .then(response => response.data)
        .catch(erro => {
            throw erro;
        })
    }

    adicionarObra(token, data, id) {
        
        return api.post(`/usuarios/${id}/obras`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    excluirObra(token, id, idObra) {
        
        return api.delete(`/usuarios/${id}/obras/${idObra}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    renomearObra(token, data, id, idObra) {
        
        return api.put(`/usuarios/${id}/obras/${idObra}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    
}

export default new Services();