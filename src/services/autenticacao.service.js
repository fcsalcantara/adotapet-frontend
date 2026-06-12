import axios from 'axios';

const autenticacao = {'email': 'username@estacio.br', 'senha': 'adota@local'};
const autenticacaoApi = axios.create({baseURL: 'http://localhost:8080/autenticacao/'});

async function login() {
  const resp =
    await autenticacaoApi.post('/login', autenticacao, {headers: {'Content-Type': 'application/json'}});
  return resp.data;
}

export {login};
