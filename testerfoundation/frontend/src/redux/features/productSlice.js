import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const BASE_URL = "http://localhost:3000/api/products/"

const initialState = {
    products: [],
    allProducts: []

}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response?.data.products
})

export const addProducts = createAsyncThunk("products/addProducts", async (product) => {
     await axios.post(BASE_URL, product)
    return product
})
export const deleteProducts = createAsyncThunk("post/deleteProducts", async (id) => {
       await axios.delete(`${BASE_URL}/${id}`);
       return id
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    searchButton: (state, action) => {
    state.products = state.allProducts.filter((product) => product.name.toLowerCase().includes(action.payload.trim().toLowerCase()))
    },
    sortAZ: (state) => {
        state.products = state.products.sort((a,b)=> a.name.localeCompare(b.name))
    },
    sortZA: (state) => {
        state.products = state.products.sort((a, b)=> b.name.localeCompare(a.name))
    },
    lowPrice: (state) => {
        state.products = state.products.sort((a,b) => a.price - b.price)
    },
    highPrice: (state) => {
        state.products = state.products.sort((a, b) => b.price - a.price)
    }

},
  extraReducers(builder) {
        builder
            .addCase(addProducts.fulfilled, (state,action) => {
               state.products.push(action.payload)
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.allProducts = action.payload;
            })
      
            .addCase(deleteProducts.fulfilled, (state, action) => {
                state.products = state.products.filter(item => 
                item._id !== action.payload)
            })
    }
})

export const {extraReducers, sortAZ, sortZA, lowPrice, highPrice, searchButton} = productSlice.actions
export default productSlice;