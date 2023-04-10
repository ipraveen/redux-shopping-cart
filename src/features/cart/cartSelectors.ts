import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


export const getTotalPrice = createSelector(
    (state: RootState) => state.cart.items,
    (state: RootState) => state.products.products,
    (items, products) => {

        let total = 0;
        for (const [id, count] of Object.entries(items)) {
            total += products[id].price * count;
        }
        return total.toFixed(2);
    }
);