'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/elements/Button';
import { logout } from '@/repositories/auth';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();

    router.replace('/login');
    router.refresh();
  }, [router]);

  return (
    <Button onClick={handleLogout} className="btn-sm btn-outline btn-error">
      Logout
    </Button>
  );
};

export default LogoutButton;
