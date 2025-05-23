import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/products"

const initialState = {
    products: [],
    allProducts: [],
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(BASE_URL)
    return response?.data.products
})

export const addProducts = createAsyncThunk("products/addProducts", async (product) => {
    await axios.post(BASE_URL, product)
    return product
})

export const deleteProducts = createAsyncThunk("products/deleteProducts", async (id) => {
   await axios.delete(`${BASE_URL}/${id}`);  
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  sortAZ: (state) => {
    state.products = state.products.sort((a, b) => a.name.localeCompare(b.name))
  },
  sortZA: (state) => {
    state.products = state.products.sort((a, b) => b.name.localeCompare(a.name))
  },
  sortLow: (state) => {
    state.products = state.products.sort((a, b) => a.price - b.price)
    },
    sortHigh: (state) => {
        state.products = state.products.sort((a, b) => b.price - a.price)
        },
        searchInput: (state, action) => {
        state.products = state.allProducts.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
        
        },
},

  extraReducers(builder) {
        builder
            .addCase(addProducts.fulfilled, (state, action) => {
               state.products.push(action.payload)
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
              
                state.products = action.payload;
                state.allProducts = action.payload;
            })
        
            .addCase(deleteProducts.fulfilled, (state, action) => {
               state.products = state.products.filter((item) => item._id !== action.payload)
            })
    }
})
export const{extraReducers, sortAZ, sortZA, sortHigh, sortLow, searchInput} = productSlice.actions;
export default productSlice;
