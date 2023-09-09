
'use client';

import React, { useEffect } from 'react';

import useBooks from '@/stores/books';
import BookCard from '@/components/parts/Books/BookCard';
import Link from 'next/link';

const BookList = ({ books }) => {
  const { setBooks, books: booksStore } = useBooks();
  
  useEffect(() => {
    setBooks(books);
  }, [books, setBooks]);

  return (
    booksStore.length ? (
      <div className="grid grid-cols-3 gap-4">
        {booksStore.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    ) : (
      <p>
        You don&apos;t have a book data. Create you data book at{' '}
        <Link href="/books/add" className="link link-primary">here</Link>
      </p>
    )
  )
}

export default BookList;
