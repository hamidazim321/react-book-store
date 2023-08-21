import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import '../styles/BookList.css';

export default function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <ul className="book-list">
      {
      books.map((book) => (
        <li key={book.title} className="book-card">
          <BookCard BookObject={book} />
        </li>
      ))
      }
    </ul>
  );
}
