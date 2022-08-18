
import { createSlice } from "@reduxjs/toolkit"


export const shoppingCart = createSlice({
    name: 'shoppingCart',
    initialState: {
        value: {
            steps: [
                {
                    header: 1,
                    body: 'ورود یا ثبت نام',
                    selected: true
                },
                {
                    header: 2,
                    body: 'انتخاب محل دریافت',
                    selected: false
                },
                {
                    header: 3,
                    body: 'تعیین زمان تحویل',
                    selected: false
                },
                {
                    header: 4,
                    body: 'پرداخت هزینه',
                    selected: false
                },
            ],
            location: undefined,
            cart: [
            ]
        }
    },
    reducers: {
        setSteps: (state, action) => {
            for (let i = 0; i < state.value.steps.length; i++) {
                state.value.steps[i].selected = false
            }
            state.value.steps[action.payload - 1].selected = true
        },
        setLocation: (state, action) => {
            state.value.location = action.payload
        }
    }
})

export default shoppingCart.reducer;
export const { setSteps, setLocation } = shoppingCart.actions

