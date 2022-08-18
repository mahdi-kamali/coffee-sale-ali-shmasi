import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        value: [
            {
                header: "نوع کالا",
                svg: 'icon-park-outline:ad-product',
                body: {
                    type: "check",
                    options: [
                        { id: 0, value: true, title: "قهوه" },
                        { id: 1, value: false, title: "تجهیزات" },
                    ]
                },
            },
            {
                header: "برند",
                svg: 'eva:question-mark-circle-fill',
                body: {
                    type: "check",
                    options: [
                        { id: 2, value: true, title: "بن مانلو" },
                        { id: 3, value: false, title: "دونیسی" },
                        { id: 4, value: false, title: "استارباکس" },
                        { id: 5, value: false, title: "لاواتزا" },
                    ]
                },
            },
            {
                header: "قیمت",
                svg: 'entypo:price-tag',
                body: {
                    type: "range",
                    options: [
                        {
                            id: 6,
                            title: "محدوده قیمت",
                            min: 0,
                            max: 100000000,
                            minSelected: 0,
                            maxSelected: 0
                        },
                    ]
                },
            },
            {
                header: "ارسال به",
                svg: 'fa6-solid:truck',
                body: {
                    type: "toggle",
                    options: [
                        { id: 7, value: false, title: { on: 'فقط نواحی نردیک', off: 'کل نقاط کشور' } },
                    ]
                },
            },
            {
                header: "موجودی کالا",
                svg: 'fa6-solid:truck',
                body: {
                    type: "toggle",
                    options: [
                        { id: 8, value: false, title: { on: 'فقط کالای موجود', off: 'همه ی کالاها' } },
                    ]
                },
            },
        ]
    },
    reducers: {
        setInput(state, action) {
            state.value.forEach((item, parentIndex) => {
                item.body.options.forEach((input, childIndex) => {
                    if (input.id === action.payload.id) {
                        // console.log(parentIndex, childIndex);
                        state.value.at(parentIndex).body.options[childIndex] = action.payload
                    }

                })
            })
        }
    }
})
export default filterSlice.reducer

export const { setInput } = filterSlice.actions
