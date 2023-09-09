import BookEdit from '@/components/pages/BookEdit';

export const metadata = {
  title: 'Edit Book',
};

const BookEditPage = ({ params }) => (
  <BookEdit bookId={params.id} />
);

export default BookEditPage;
