import api from '../services/api';
class Services {

    cadastrar(data) {
        api.post('/cadastro', data)
    }

    verificarLogin(data) {
        return api.post('/cadastro/verificacao', data)
        .then(response => response.data)
        .catch(erro => {
            throw erro;
        })
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

    relatorioObra(token, id, idObra) {

        return api.get(`/usuarios/${id}/obras/${idObra}/relatorio`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    buscarEtapas(token, id, idObra) {

        return api.get(`/usuarios/${id}/obras/${idObra}/etapas`, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    adicionarEtapa(token, data, id, idObra) {
        return api.post(`/usuarios/${id}/obras/${idObra}/etapas`, data, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
    }

    renomearEtapa(token, data, id, idObra, idEtapa) {
        return api.put(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    excluirEtapa(token, id, idObra, idEtapa) {
        return api.delete(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    buscarServicos(token, id, idObra, idEtapa) {
        return api.get(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}/servicos`, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    adicionarServico(token, id, idObra, idEtapa) {
        return api.post(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}/servicos`, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    excluirServico(token, id, idObra, idEtapa, idServico) {
        return api.delete(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}/servicos/${idServico}`, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    excluirServicos(token, id, idObra, idEtapa) {
        return api.delete(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}/servicos/`, {
            headers: {
                Authorization: `Bearer ${token.replace(/['"]+/g, "")}`
            }
        })
            .then(response => response.data)
            .catch(erro => {
                throw erro;
            })
    }

    atualizarServicos(token, data, id, idObra, idEtapa) {
        return api.put(`/usuarios/${id}/obras/${idObra}/etapas/${idEtapa}/servicos/atualizar`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

}

export default new Services();