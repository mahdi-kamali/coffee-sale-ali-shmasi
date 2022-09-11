import { createSlice } from "@reduxjs/toolkit";



function setBodyOverFlow(state) {
    if (state === 'close' || state === 'hide') {
        document.body.style.overflow = 'auto'
    }
    if (state === 'show' || state === 'open' || state === 'sign-in' || state === 'sign-up') {
        document.body.style.overflow = 'hidden'
    }
}


export const windowsSlice = createSlice({
    name: 'windows',
    initialState: {
        value: {
            user: {
                // type : 'sign-in'
                // type : 'sign-up'
                // type : 'close'
                type: 'close'
            },
            alert: {
                // state : 'show' ;
                // state : 'hide' ;
                // mode : 'green' ,
                // mode : 'red' ,
                // mode : 'yellow' ,
                // mode : 'blue' ,
                color: 'green',
                text: ' پیام شما ',
                state: 'hide'
            },
            changeAddress: {
                // state : 'close'
                // state : 'show'
                state: 'close',
            },
            productDetail: {
                state: 'hide',
            }
        }
    },
    reducers: {

        setUserWindow: (state, action) => {
            state.value.user = action.payload
            setBodyOverFlow(action.payload.type)
        },
        setAlertWindow: (state, action) => {
            const tempValue = {}
            // state.value.alert = action.payload
            action.payload.color !== undefined ? tempValue.color = action.payload.color :
                tempValue.color = state.value.alert.color

            action.payload.state !== undefined ? tempValue.state = action.payload.state :
                tempValue.state = state.value.alert.state

            action.payload.text !== undefined ? tempValue.text = action.payload.text :
                tempValue.text = state.value.alert.text

            state.value.alert = tempValue
        },
        setChangeAddressWindow: (state, action) => {
            state.value.changeAddress.state = action.payload
            setBodyOverFlow(action.payload)
        },
        setProductDetailWindow: (state, action) => {
            state.value.productDetail.state = action.payload
            setBodyOverFlow(action.payload)
        }

    }
})

export default windowsSlice.reducer

export const { setUserWindow, setAlertWindow, setChangeAddressWindow, setProductDetailWindow } = windowsSlice.actions