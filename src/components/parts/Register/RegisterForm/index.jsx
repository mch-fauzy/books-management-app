'use client';

import React, { useCallback, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import TextInput from '@/components/elements/TextInput';
import FormControl from '@/components/elements/FormControl';
import Button from '@/components/elements/Button';
import useMutation from '@/lib/hooks/useMutation';
import { register } from '@/repositories/auth';

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState({
    confirmPassword: undefined,
  });

  const checkConfirmPassword = useCallback((password, confirmPassword) => {
    let isValid = true;

    if (password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'Password and Confirm Password are not same',
      }));

      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        confirmPassword: undefined,
      }))
    }

    return isValid;
  }, []);

  const registerMutation = useMutation({
    apiFunc: register,
    onSuccess: () => {
      toast.success('Account created');

      router.push('/login');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const isValidConfirmPassword = checkConfirmPassword(formData.get('password'), formData.get('confirmPassword'));

    if (!isValidConfirmPassword) return;

    registerMutation.mutate({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });
  }, [checkConfirmPassword, registerMutation]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <FormControl label="Name" id="name">
          <TextInput
            id="name"
            name="name"
            placeholder="John Doe"
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Email" id="email">
          <TextInput
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Password" id="password">
          <TextInput
            type="password"
            id="password"
            name="password"
            placeholder=""
            isBlock
            required
            minLength={8}
          />
        </FormControl>

        <FormControl label="Confirm Password" id="confirmPassword" error={error.confirmPassword}>
          <TextInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder=""
            isBlock
            required
            minLength={8}
          />
        </FormControl>
      </div>

      <Button
        type="submit"
        className="mt-8 btn-block"
        isLoading={registerMutation.isLoading}
        loadingText="Creating account..."
      >
        Create Account
      </Button>

      <p className="text-center mt-3">
        Already Have an account? <Link href="/login" className="link link-primary">Login</Link>
      </p>
    </form>
  )
}

export default RegisterForm;
