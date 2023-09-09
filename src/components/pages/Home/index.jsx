import React from 'react';
import Container from '@/components/elements/Container';
import BookList from '@/components/parts/Books/BookList';
import { getBooks } from '@/repositories/book';

const Home = async () => {
  const booksResponse = await getBooks();

  return (
    <Container>
      <BookList books={booksResponse.books} />
    </Container>
  )
}

export default Home;
