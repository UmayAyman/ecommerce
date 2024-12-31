import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import productsReducer from './features/productSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
});
