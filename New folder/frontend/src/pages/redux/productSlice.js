import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  allProducts: [],
};

let baseUrl = "http://localhost:4000/api/products";

export const getProducts = createAsyncThunk("products/get", async () => {
  let { data } = await axios.get(baseUrl);
  return data;
});

export const deleteProducts = createAsyncThunk(
  "products/delete",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);

export const postProducts = createAsyncThunk("products/post", async (data) => {
  await axios.post(`${baseUrl}`, data);
  return data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortBy: (state, action) => {
      if (action.payload == "high") {
        state.products = state.products.sort((a, b) => b.price - a.price);
      } else if (action.payload == "low") {
        state.products = state.products.sort((a, b) => a.price - b.price);
      }
    },
    searchProduct: (state, action) => {
      state.products = state.allProducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    }),
      builder.addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
      }),
      builder.addCase(postProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export const { sortBy, searchProduct } = productSlice.actions;

export default productSlice.reducer;
