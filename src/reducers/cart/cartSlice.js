import { createSlice } from '@reduxjs/toolkit'

const initialCart = {
    totalCount: 0,
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addProductToCart: (state,action) => {
         state.products = [...state.products, action.payload];
         state.totalCount += 1   
        }
    }
})


export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer