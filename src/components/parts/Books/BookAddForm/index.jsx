'use client';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import TextInput from '@/components/elements/TextInput';
import FormControl from '@/components/elements/FormControl';
import Button from '@/components/elements/Button';
import useMutation from '@/lib/hooks/useMutation';
import { addBook } from '@/repositories/book';

const BookAddForm = () => {
  const router = useRouter();

  const addBookMutation = useMutation({
    apiFunc: addBook,
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    addBookMutation.mutate(formData);
  }, [addBookMutation]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <FormControl label="Title" id="title">
          <TextInput
            id="title"
            name="title"
            placeholder="Book Title"
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Author" id="author">
          <TextInput
            id="author"
            name="author"
            placeholder="Author Name"
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Publisher" id="publisher">
          <TextInput
            id="publisher"
            name="publisher"
            placeholder="Publisher Name"
            isBlock
            required
          />
        </FormControl>

        <FormControl label="Year" id="year">
          <TextInput
            type="number"
            id="year"
            name="year"
            placeholder="Publish Year"
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
            isBlock
            required
            min="1"
          />
        </FormControl>

        <FormControl label="Image" id="image">
          <TextInput
            type="file"
            id="image"
            name="image"
            isBlock
            required
            accept="image/png, image/jpeg, image/jpg"
            
          />
        </FormControl>
      </div>

      <Button
        type="submit"
        className="mt-8 btn-block"
        isLoading={addBookMutation.isLoading}
        loadingText="Adding book.."
      >
        Add Book
      </Button>
    </form>
  )
}

export default BookAddForm;
