import React from 'react';

import Container from '@/components/elements/Container';
import { BookAddForm } from '@/components/parts/Books';

const BookAdd = () => {
  return (
    <Container>
      <div className="custom-card max-w-[400px] mx-auto px-5 py-7">
        <h1 className="text-xl font-medium text-center mb-4">Add Book Information</h1>
        <BookAddForm />
      </div>
    </Container>
  )
}

export default BookAdd;
