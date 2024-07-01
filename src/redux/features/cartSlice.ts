import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: IProduct[] = [];

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state: Draft<IProduct[]>, action: PayloadAction<IProduct>) => {
            const existingProduct = state.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push(action.payload);
            }
        },
        removeFromCart: (state: Draft<IProduct[]>, action: PayloadAction<string>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;