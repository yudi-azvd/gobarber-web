import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Entrar</Button>

        <a href="/#">Esqueci minha senha</a>
      </form>

      <a href="/#">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
