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

export const INITIAL_STATE: Products[] = Data.map((product: Products) => {
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
    extraReducers: builder => {
        builder.addMatcher(
            action => action.type.endsWith('/rejected'),
            (state, action) => {
                console.log(`${action.type} error: ${action.error.message}`);
            }
        );
    },
})

export default sliceProducts.reducer;
export const { addProduct, removeProduct, editProduct } = sliceProducts.actions;

export const useProducts = (state: any) => {
    return state.products as Products[];
}