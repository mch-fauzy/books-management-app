'use client';

import React, { useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import TextInput from '@/components/elements/TextInput';
import FormControl from '@/components/elements/FormControl';
import Button from '@/components/elements/Button';
import useMutation from '@/lib/hooks/useMutation';
import { updateBook } from '@/repositories/book';

const BookEditForm = ({ initialValue }) => {
  const [book, setBook] = useState(initialValue);
  const router = useRouter();

  const editBookMutation = useMutation({
    apiFunc: (data) => updateBook(book.id, data),
    onSuccess: () => {
      router.replace('/');
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    editBookMutation.mutate(book);
  }, [editBookMutation, book]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <FormControl label="Title" id="title">
          <TextInput
            id="title"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Author" id="author">
          <TextInput
            id="author"
            name="author"
            placeholder="Author Name"
            value={book.author}
            onChange={handleChange}
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Publisher" id="publisher">
          <TextInput
            id="publisher"
            name="publisher"
            placeholder="Publisher Name"
            value={book.publisher}
            onChange={handleChange}
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Publish Year" id="year">
          <TextInput
            type="number"
            id="year"
            name="year"
            placeholder="Publish Year"
            value={book.year}
            onChange={handleChange}
            isBlock
            required
            min="1500"
            max="2023"
            step="1"
          />
        </FormControl>

        <FormControl label="Total Pages" id="pages">
          <TextInput
            type="number"
            id="pages"
            name="pages"
            placeholder="Total Pages"
            value={book.pages}
            onChange={handleChange}
            isBlock
            required
            min="1"
          />
        </FormControl>
      </div>

      <Button
        type="submit"
        className="mt-8 btn-block"
        isLoading={editBookMutation.isLoading}
        loadingText="Updating book.."
      >
        Edit Book
      </Button>
    </form>
  )
}

export default BookEditForm;
