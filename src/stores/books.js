import { create } from 'zustand';

const useBooks = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
  removeBook: (id) => set((state) => ({
    books: state.books.filter((book) => {
      console.log(book.id, id);
      return book.id !== id
    })
  })),
}));

export default useBooks;
