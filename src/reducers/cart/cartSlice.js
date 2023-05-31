import { createSlice } from '@reduxjs/toolkit'

const initialCart = {
    totalCount: 0,
    productsList: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addProductToCart: (state,action) => {
         state.productsList = [...state.productsList, action.payload];
         state.totalCount += 1   
        },
        removeProductOfCart: (state,action) => {
            const productId = action.payload
            state.productsList = state.productsList.filter(x => x.id !== productId)
            state.totalCount -= 1
        }
    }
})


export const { addProductToCart, removeProductOfCart } = cartSlice.actions

export default cartSlice.reducer