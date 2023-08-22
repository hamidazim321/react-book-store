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
      const Books = state.books;
      return {
        ...state,
        books: Books.filter((book) => book.id !== payload.id),
      };
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
