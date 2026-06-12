import ListaAnimais from './components/ListaAnimais';
import styled from 'styled-components';
import {read} from './services/animais.service';

/* Dados de acesso à API */

const animais = await read();
console.log(`

Animais (Pets) obtidos da API:

${JSON.stringify(animais)}

`);
/* */

const AppContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(360deg, #30668d 1%, #b8d9f3 99%);
`;

function App() {
  return (
    <AppContainer>
      <ListaAnimais/>
    </AppContainer>
  );
}

export default App;
