import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/productSlice'
import wishlistSlice from '../features/wishlistSlice'
import basketSlice from '../features/basketSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedWishlistReducer = persistReducer(persistConfig, wishlistSlice.reducer)
const persistedBasketReducer = persistReducer(persistConfig, basketSlice.reducer)




export const store = configureStore({
  reducer: {
products: productSlice.reducer,
wishlist: persistedWishlistReducer,
basket: persistedBasketReducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({serializableCheck:false})
})

export const persistor = persistStore(store)

export default store