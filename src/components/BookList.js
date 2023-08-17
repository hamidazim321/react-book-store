import React, { useState } from 'react';
import BookCard from './Book';
import '../styles/BookList.css';

export default function BookList() {
  const [Books, setBooks] = useState([
    {
      title: 'TITLE 1',
      category: 'ACTION',
      author: 'AUTHOR 1',
      progress: 64,
      chapter: '17',
    },
    {
      title: 'TITLE 2',
      category: 'ACTION',
      author: 'AUTHOR 1',
      progress: 64,
      chapter: '17',
    },
    {
      title: 'TITLE 3',
      category: 'ACTION',
      author: 'AUTHOR 1',
      progress: 64,
      chapter: '17',
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
