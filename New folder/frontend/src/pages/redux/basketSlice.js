import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
    basket: [],
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let findProduct = state.basket.find((item) => item._id === action.payload._id)
            if (!findProduct) {
                state.basket.push({ ...action.payload, count: 1 })
                toast.success("Product add basket")
            } else {
                findProduct.count += 1
                toast.success("Product add basket")
            }

        },
        removeBasket: (state, action) => {
            state.basket = state.basket.filter((item) => item._id !== action.payload)
             toast.error("Product delete basket")
        },
        plusBtn: (state, action) => {
            let findProduct = state.basket.find((item) => item._id === action.payload)
            if (findProduct) {
                findProduct.count++
                toast.success("Product decrement basket")
            }
        },
        minusBtn: (state, action) => {
            let findProduct = state.basket.find((item) => item._id === action.payload)
            if (findProduct) {
                findProduct.count--
                toast.info("Product increment basket")
            }
        }
    },
})

export const { addBasket, removeBasket, plusBtn, minusBtn } = basketSlice.actions

export default basketSlice.reducer