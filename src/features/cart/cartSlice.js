import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookId = action.payload.id;
      const bookFound = state.bookInCart.find(
        (book) => book.data.id === bookId
      );
      if (bookFound) {
        bookFound.count++;
      } else {
        state.bookInCart.push({
          data: action.payload,
          count: 1,
        });
      }
    },
    removeBook: (state,action)=>{
      const bookId = action.payload.data.id;
      const bookFound = state.bookInCart.find(
        (book) => book.data.id === bookId
      );
      if(bookFound.count===1){
        state.bookInCart = state.bookInCart.filter((book)=>{
          return book.data.id !== action.payload.data.id;
        })
      }
      else{
        bookFound.count--;
      }
    },
    clearCart:(state)=>{
      state.bookInCart.splice(0,state.bookInCart.length);
    }
  }
});

export const { addBook, removeBook, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
