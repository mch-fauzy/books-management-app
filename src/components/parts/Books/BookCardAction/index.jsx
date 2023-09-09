'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/elements/Button';
import useMutation from '@/lib/hooks/useMutation';
import { deleteBook } from '@/repositories/book';
import { toast } from 'react-toastify';
import useBooks from '@/stores/books';

const BookCardAction = ({
  bookId
}) => {
  const { removeBook } = useBooks();
  const router = useRouter();

  const deleteMutation = useMutation({
    apiFunc: deleteBook,
    onSuccess: () => {
      removeBook(bookId);
      router.refresh();

      toast.success('Book deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return (
    <>
      <Button
        href={`/books/${bookId}/edit`}
        className="btn-sm btn"
      >
        Edit
      </Button>
      <Button
        className="btn-sm btn-error"
        onClick={() => deleteMutation.mutate(bookId)}
        isLoading={deleteMutation.isLoading}
      >
        Delete
      </Button>
    </>
  )
}

export default BookCardAction;
