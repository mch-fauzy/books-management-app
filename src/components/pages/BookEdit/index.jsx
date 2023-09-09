import React from 'react';
import Container from '@/components/elements/Container';
import { BookEditForm } from '@/components/parts/Books';
import { getBook } from '@/repositories/book';

const BookEdit = async ({ bookId }) => {
  const bookResponse = await getBook(bookId);

  return (
    <Container>
      <div className="custom-card max-w-[400px] mx-auto px-5 py-7">
        <h1 className="text-xl font-medium text-center mb-4">Edit Book Information</h1>

        <BookEditForm initialValue={bookResponse.book} />
      </div>
    </Container>
  )
}

export default BookEdit;
