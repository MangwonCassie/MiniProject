import { createSlice } from "@reduxjs/toolkit";

//NOTE: slice: action + reducer
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //NOTE: GET ALL, action name: getProductStart, getProductSucess
    getProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },

    //NOTE: Success 이면 fetch process is completed, so isfetching is false
    getProductSuccess: (state, action) => {
      state.isFetching = false
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //NOTE: DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload,
          1)
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //NOTE update
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = true;
    },

    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      const updatedProductIndex = state.products.findIndex((item) => item._id === action.payload.id);

      // Update the product in the array
      if (updatedProductIndex !== -1) {
        state.products[updatedProductIndex] = action.payload;
      }

    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }

  }
});



//NOTE: apiCalls와 연결
export const { getProductStart, getProductSuccess, getProductFailure,
  deleteProductStart, deleteProductSuccess, deleteProductFailure
, updateProductStart, updateProductSuccess, updateProductFailure } = productSlice.actions;

export default productSlice.reducer;