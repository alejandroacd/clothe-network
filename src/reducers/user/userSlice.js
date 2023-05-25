import { createSlice } from '@reduxjs/toolkit'

const initialUser = {
    email: "",
    token: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token
        },
        unsetUser: (state) => {
            state.email = "",
            state.token = ""
        }
    }
})


export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer