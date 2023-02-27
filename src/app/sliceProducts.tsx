import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Data from "../data/mockData.json"

export interface Products {
    id: number;
    product: string;
    image: string;
    category: string;
    price: string;
    latest_alteration: string;
}

const INITIAL_STATE: Products[] = Data.map((product: Products) => {
    return {
        id: product.id,
        product: product.product,
        image: product.image,
        category: product.category,
        price: product.price,
        latest_alteration: product.latest_alteration,
    };
});

const sliceProducts = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        addProduct: (state, action: PayloadAction<Products>) => {
            state.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            return state.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action: PayloadAction<Products>) => {
            const index = state.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    },
})

export default sliceProducts.reducer;
export const { addProduct, removeProduct, editProduct } = sliceProducts.actions;

export const useProducts = (state: any) => {
    return state.products as Products[];
}