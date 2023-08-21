import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      /* eslint-disable no-param-reassign */
      state.categoryList = payload === 'Under construction' ? 'Under construction' : state.categoryList;
    },
  },
});

export default categoriesSlice.reducer;
export const { setStatus } = categoriesSlice.actions;
