import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      progress: 64,
      state: 'Chapter 17',
    },
    {
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      progress: 8,
      state: 'Chapter 3: "A Lesson Learned" ',
    },
    {
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Suzanne Collins',
      progress: 0,
      state: 'Introduction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(
        {
          ...payload,
          author: 'Suzanne Collins',
          progress: 0,
          state: 'Chapter 1',
        },
      );
    },
    removeBook: (state, { payload }) => {
      /* eslint-disable no-param-reassign */
      state.books = state.books.filter((book) => (book.title !== payload.title
        && book.category !== payload.category));
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
