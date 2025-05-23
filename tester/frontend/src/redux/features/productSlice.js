import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/products";

const initialState = {
  products: [],
  allProducts: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(BASE_URL);
    return response?.data.products;
  }
);

export const addProducts = createAsyncThunk(
  "products/addProducts",
  async (product) => {
    await axios.post(BASE_URL, product);
    return product;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortAzProduct: (state) => {
      state.products = state.products.sort((a, b) => a.name.localeCompare(b.name))
    },

    sortZaProduct: (state) => {
      state.products = state.products.sort((a, b) => b.name.localeCompare(a.name))
    },

    sortLowProduct: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price)
    },

    sortHighProduct: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price)
    },

    serachProduct: (state, action) => {
      state.products = state.allProducts.filter((product) => product.name.toLowerCase().includes(action.payload.trim().toLowerCase()))
    }
  },
  extraReducers(builder) {
    builder
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.allProducts = action.payload;
      })

      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export const { extraReducers, sortAzProduct, sortZaProduct, sortHighProduct, sortLowProduct, serachProduct } = productSlice.actions;
export default productSlice;
