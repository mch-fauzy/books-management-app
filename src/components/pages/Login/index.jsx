import React from 'react';
import Container from '@/components/elements/Container';
import { LoginForm } from '@/components/parts/Login';

const Login = () => {
  return (
    <Container>
      <div className="custom-card max-w-[400px] mx-auto px-5 py-7">
        <h1 className="text-xl font-medium text-center mb-4">Login</h1>
        <LoginForm />
      </div>
    </Container>
  )
}

export default Login;
