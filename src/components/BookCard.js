import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, fetchBooks } from '../redux/books/books';
import '../styles/BookCard.css';

export default function BookCard({ BookObject }) {
  /* eslint-disable camelcase */
  const {
    title, category, author, item_id,
  } = BookObject;

  const dispatch = useDispatch();

  const removeBook = async () => {
    /* eslint-disable camelcase */
    await deleteBook(item_id);
    await dispatch(fetchBooks());
  };
  return (
    <>
      <div className="book-description">
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <div className="book-btns">
          <button type="button" className="book-btn border-right">Comments</button>
          <button
            type="button"
            className="book-btn border-right"
            onClick={() => {
              /* eslint-disable camelcase */
              removeBook();
            }}
          >
            Remove
          </button>
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <span className="progress-graph" />
        <div className="progress-state">
          <p className="progress-percentage">
            {0}
            %
          </p>
          <p className="progress-completed">completed</p>
        </div>
      </div>
      <div className="book-status">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter-number">
          Chapter 1
        </p>
        <button type="button" className="update-progess-btn">Update Progress</button>
      </div>
    </>
  );
}

BookCard.propTypes = {
  BookObject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};
