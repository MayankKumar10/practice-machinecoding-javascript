import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    like: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find(item => item.id === id);
      if (product) {
        product.like++;
      }
    },
    dislike: (state, action) => {
      const { id } = action.payload;
      const product = state.products.find(item => item.id === id);
      if (product) {
        product.dislike++;
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'success';
        const loadedProducts = action.payload.map(item => ({
          ...item,
          like: 0,
          dislike: 0
        }));
        state.products = loadedProducts;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

export const { like, dislike } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
