import PropTypes from 'prop-types';
import '../styles/BookCard.css';

export default function BookCard({ BookObject, removeBook }) {
  const {
    title, category, author, progress, state,
  } = BookObject;
  return (
    <>
      <div className="book-description">
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <div className="book-btns">
          <button type="button" className="book-btn border-right">Comments</button>
          <button type="button" className="book-btn border-right" onClick={() => { removeBook(BookObject); }}>Remove</button>
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <span className="progress-graph" />
        <div className="progress-state">
          <p className="progress-percentage">
            {progress}
            %
          </p>
          <p className="progress-completed">completed</p>
        </div>
      </div>
      <div className="book-status">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter-number">
          {state}
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
    progress: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};