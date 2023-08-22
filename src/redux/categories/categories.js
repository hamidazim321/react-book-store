import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state, { payload }) => {
      if (payload === 'Under construction') {
        return {
          ...state,
          categoryList: 'Under construction',
        };
      }
      return state;
    },
  },
});

export default categoriesSlice.reducer;
export const { setStatus } = categoriesSlice.actions;
