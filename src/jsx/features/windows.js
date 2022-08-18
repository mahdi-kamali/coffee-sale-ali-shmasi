import { createSlice } from "@reduxjs/toolkit";

export const windowsSlice = createSlice({
    name: 'windows',
    initialState: {
        value: {
            user: {
                // type : 'login'
                // type : 'signin'
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
                state: 'show'
            }
        }
    },
    reducers: {
        setUserWindow: (state, action) => {
            state.value['user'] = action.payload
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
        }

    }
})

export default windowsSlice.reducer

export const { setUserWindow, setAlertWindow, setChangeAddressWindow } = windowsSlice.actions