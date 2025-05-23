import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
        const existProducts = state.wishlist.find((item) => item._id === action.payload._id);
        if (!existProducts) {
            state.wishlist.push({...action.payload});
        }
    },
    deleteWishlist: (state, action) => {
        state.wishlist = state.wishlist.filter((item) => item._id !== action.payload._id);
    }
  },

});

export const {addWishlist, deleteWishlist} = wishlistSlice.actions

export default wishlistSlice;
