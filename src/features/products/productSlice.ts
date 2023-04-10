import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../app/api';

interface ProductState {
    products: {
        [id: string]: Product;
    };
}

const initialState: ProductState = {
    products: {},
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        receivedProducts(state, action: PayloadAction<Product[]>) {
            const products = action.payload;

            products.forEach((product) => {
                state.products[product.id] = product;
            });
        },
    },
});


export const {receivedProducts} = productSlice.actions; 
export default productSlice.reducer;
