import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      progress: 0,
      state: 'Chapter 1',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      progress: 0,
      state: 'Chapter 1',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      progress: 0,
      state: 'Chapter 1',
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
      const Books = state.books;
      return {
        ...state,
        books: Books.filter((book) => book.item_id !== payload.item_id),
      };
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
