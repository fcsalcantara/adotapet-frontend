import Button from '../components/Button';
import styled from 'styled-components';
import Input from '../components/Input';
import {AppContainer} from '../App';

// import {livros} from './dados';

const LoginContainer = styled.section`
    color: #FFFFFF;
    text-align: center;
    padding: 85px 0;
    height: 250px;
    width: 100%;
`;

const LoginLabel = styled.h3`
    font-size: 20px;
    font-weight: 500;
    margin-top: 40px;
`;

function Login() {
  return (
    <AppContainer>
      <LoginContainer>
        <LoginLabel>E-mail</LoginLabel>
        <Input type={'email'} key={'email'} />
        <LoginLabel>Senha</LoginLabel>
        <Input type={'password'} key={'senha'} />
        <br/>
        <Button type={'submit'}>Entrar</Button>
      </LoginContainer>
    </AppContainer>
  );
}

export default Login;
