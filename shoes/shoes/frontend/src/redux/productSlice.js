



const BASE_URL = "http://localhost:6000/api/products";

const initialState = {
  products: [],
  allProducts: [],
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async ()=>{
  const response= await axios.get(BASE_URL)
  return response.data.products
})


export const addProducts= createAsyncThunk("products/addProducts", async (product)=>{
  await axios.post(BASE_URL, product)
  return product
})

export const delelteProduct=createAsyncThunk("products/deleteProducts", async(id)=>{
  await axios.delete(`${BASE_URL}/${id}`)
})

