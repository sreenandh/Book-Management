import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: []
  },
  reducers: {
    addBook: (state, action) => {
      state.bookList.push({
        ...action.payload,
        id: Date.now() // Simple unique ID generation
      });
    },
    deleteBook: (state, action) => {
      state.bookList = state.bookList.filter(
        book => book.id !== action.payload
      );
    },
    updateBook: (state, action) => {
      const index = state.bookList.findIndex(
        book => book.id === action.payload.id
      );
      if (index !== -1) {
        state.bookList[index] = action.payload;
      }
    }
  }
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;