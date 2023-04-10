import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    items: {
        [productId: string]: number;
    };
}

const initialState: CartState = {
    items: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            if (state.items[id] == null) {
                state.items[id] = 0;
            }
            state.items[id] += 1;
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            delete state.items[id];
        },
        updateCount(state, action: PayloadAction<{ id: string; count: number }>) {
            const { id, count } = action.payload;
            state.items[id] = count;
        },
    },
});

export const { addToCart, removeFromCart, updateCount } = cartSlice.actions;
export default cartSlice.reducer;
