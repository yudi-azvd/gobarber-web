import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background, AnimationContainer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

import { useToast } from '../../hooks/toast';

interface ForgotPasswordFormData {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail é obrigatório')
            .required('Digite um e-mail válido'),
        });

        await schema.validate(data, { abortEarly: false });

        // recuperação de senha
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(error);

          formRef.current?.setErrors(validationErrors);
        }

        addToast({
          type: 'error',
          description: 'Ocoreu um erro ao recuperar a senha',
          title: 'Erro na recuperação de senha',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recupere sua senha</h1>

            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              type="text"
            />
            <Button type="submit">Recuperar</Button>
          </Form>

          <Link to="/register">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
