import api from '../services/api';
class Services {
    
    cadastrar(data) {
        api.post('/cadastro', data)
    }

}

export default new Services();