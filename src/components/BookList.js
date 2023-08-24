import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';
import { fetchBooks } from '../redux/books/books';

export default function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (Array.isArray(books) && books.length < 1) {
    return (
      <div className="books-list-empty">
        <p>Your Books List is empty</p>
      </div>
    );
  }
  return (
    <ul className="book-list">
      {
      books.map((book) => (
        <li key={book.item_id} className="book-card">
          <BookCard BookObject={book} />
        </li>
      ))
      }
    </ul>
  );
}
