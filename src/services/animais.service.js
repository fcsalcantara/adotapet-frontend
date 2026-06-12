import axios from 'axios';
import {login} from './autenticacao.service';

const animaisApi = axios.create({baseURL: 'http://localhost:8080/animais/'});

let tokenAutenticacao = await login();
console.log(`

O frontend obteve o autenticação na API:

${JSON.stringify(tokenAutenticacao)}

`);

const animaisRead =
  async (token) => await animaisApi.get('/read', {headers: {'Authorization': token}});

async function read() {
  let resp = await animaisRead(tokenAutenticacao.token);
  if (resp.status !== 200) { // Para atualizar o token, caso tenha expirado.
    tokenAutenticacao = await login();
    resp = await animaisRead(tokenAutenticacao.token);
  }
  return resp.data;
}

export {read};
