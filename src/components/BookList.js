import React, { useState } from 'react';
import BookCard from './Book';
import '../styles/BookList.css';

export default function BookList() {
  const [Books, setBooks] = useState([
    {
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      progress: 64,
      state: 'Chapter: 17',
    },
    {
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      progress: 8,
      state: 'Chapter: 3: "A Lesson Learned" ',
    },
    {
      title: 'TITLE 3',
      category: 'ACTION',
      author: 'AUTHOR 1',
      progress: 64,
      state: 'Introduction',
    },
  ]);

  const removeBook = (obj) => {
    setBooks(Books.filter((book) => book !== obj));
  };

  return (
    <ul className="book-list">
      {
      Books.map((book) => (
        <li key={book.title} className="book-card">
          <BookCard BookObject={book} removeBook={removeBook} />
        </li>
      ))
      }
    </ul>
  );
}
