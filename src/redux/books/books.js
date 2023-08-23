import { createSlice } from '@reduxjs/toolkit';

const API_ID = 'NWinrxHHZnIgCGnkQUgD';

export const fetchBooks = async () => {
  const req = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`);
  const resp = await req.json();
  return resp;
};

export const postBook = async (bookObj) => {
  const req = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(bookObj),
  });
  const resp = await req.json();
  return resp;
};

export const deleteBook = async (id) => {
  const req = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/${id}`, {
    method: 'DELETE',
  });
  const resp = await req.json;
  return resp;
};

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
