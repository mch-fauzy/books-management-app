import React, { Suspense } from 'react';
import Container from '@/components/elements/Container';
import Home from '@/components/pages/Home';

const Page = () => {
  return (
    <Suspense fallback={<Container>Loading your book...</Container>}>
      <Home />
    </Suspense>
  )
}

export default Page;

export const dynamic = 'force-dynamic';
