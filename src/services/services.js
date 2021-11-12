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
}

export default new Services();