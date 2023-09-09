import React from 'react';
import Container from '@/components/elements/Container';
import { RegisterForm } from '@/components/parts/Register';

const Register = () => {
  return (
    <Container>
      <div className="custom-card max-w-[400px] mx-auto px-5 py-7">
        <h1 className="text-xl font-medium text-center mb-4">Register</h1>

        <RegisterForm />
      </div>
    </Container>
  )
}

export default Register;
