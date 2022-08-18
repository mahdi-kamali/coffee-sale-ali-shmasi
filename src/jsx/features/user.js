import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'




export const userSlice = createSlice({
    name: "user",
    // initialState: { value: { fullName: "مهدی کمالی", userName : 'example' ,password: 2022, email: "test@gmail.com" } },
    initialState: { value: undefined },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        signup: (state, action) => {
            state.value = action.payload
        }
    }
})


export default userSlice.reducer;

export const { login, signup } = userSlice.actions;

