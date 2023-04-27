import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import bookReducer from '../features/books/bookSlice';
import orderReducer from '../features/orders/orderSlice'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        book:bookReducer,
        order:orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch