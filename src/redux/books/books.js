import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_ID = 'FVZlJvMt6nVeDc72v9Yr';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const req = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`);
    const resp = await req.data;
    const newBooks = [];
    const keys = Object.keys(resp);
    keys.forEach((key) => {
      newBooks.push(
        {
          ...resp[key][0],
          item_id: key,
        },
      );
    });
    return newBooks;
  },
);

export const postBook = async (bookObj) => {
  const req = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`, bookObj);
  return req;
};

export const deleteBook = async (id) => {
  const req = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/${id}`);
  return req;
};

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => ({
      ...state,
      books: payload,
    }));
  },
});

export default booksSlice.reducer;
