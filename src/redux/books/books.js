import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
